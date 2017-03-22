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

  has_many :likes
  has_many :user_likes,
    through: :likes,
    source: :user

  has_many :dislikes
  has_many :user_dislikes,
    through: :dislikes,
    source: :user

  def self.search(queryValue)
    self.where("title ILIKE ?", "%#{queryValue}%").limit(10)
  end

end
