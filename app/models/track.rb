# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  artist      :string           not null
#  track_url   :text             not null
#  img_url     :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ApplicationRecord
  validates :user_id, :title, :artist, :track_url, presence: true
  validates :track_url, uniqueness: true

  belongs_to :user

  has_many :likes,
    dependent: :destroy

  has_many :user_likes,
    through: :likes,
    source: :user,
    dependent: :destroy

  has_many :dislikes,
    dependent: :destroy

  has_many :user_dislikes,
    through: :dislikes,
    source: :user,
    dependent: :destroy

  def self.search(queryValue)
    query = "title ILIKE ? OR artist ILIKE ?", "%#{queryValue}%", "%#{queryValue}%"
    self.where(query).limit(10)
  end

  def self.top(num_tracks = 10)
    self.order(created_at: :desc).limit(num_tracks).shuffle
  end

  def self.find_next_track(selectedTrack)
    artist = selectedTrack[:artist]
    title = selectedTrack[:title]
    query = "title ILIKE ? OR artist ILIKE ?", "%#{title}%", "%#{artist}%"
    self.where(query).limit(5).order("RANDOM()").first
  end

  def self.find_similar_tracks(similarTrack)
    self.order("RANDOM()").limit(5)
  end

end
