class CreateDislikes < ActiveRecord::Migration[5.0]
  def change
    create_table :dislikes do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false
      t.timestamps
    end

    add_index :dislikes, [:user_id, :track_id], unique: true
  end
end
