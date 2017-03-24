# == Schema Information
#
# Table name: dislikes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Dislike < ApplicationRecord

  validates :user, :track, presence: true

  belongs_to :user
  belongs_to :track

  def self.find_user_dislikes(user_id)
    self.where("user_id = ?", "#{user_id}")
  end
end
