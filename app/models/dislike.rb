class Dislike < ApplicationRecord

  validates :user, :track, presence: true
  validates :user, uniqueness: {scope: :track}

  belongs_to :user
  belongs_to :track

  def self.find_user_dislikes(user_id)
    self.where("user_id = ?", "#{user_id}")
  end
end