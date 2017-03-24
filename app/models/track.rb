# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  track_url   :string           not null
#  img_url     :string
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
    self.where("title ILIKE ?", "%#{queryValue}%").limit(10)
  end

  def self.top(num_tracks = 20)
    self.order(created_at: :desc).limit(num_tracks).shuffle
  end

  def self.find_next_track(selectedTrack)
    artist = selectedTrack[:artist]
    title = selectedTrack[:title]
    query = "artist ILIKE ?", "%#{artist}%"
    self.where(query).limit(5).order("RANDOM()").first
  end

  def self.find_similar_tracks(similarTrack)
    # artist = similarTrack[:track][:artist]
    # query = "artist ILIKE ?", "%#{artist}%"
    # self.where(query).limit(5)
    self.order("RANDOM()").limit(5)
  end

end
