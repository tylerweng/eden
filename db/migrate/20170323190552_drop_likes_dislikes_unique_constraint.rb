class DropLikesDislikesUniqueConstraint < ActiveRecord::Migration[5.0]
  def change
    remove_index :likes, [:user_id, :track_id]
    remove_index :dislikes, [:user_id, :track_id]
  end
end
