class AddGenderToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gender_id, :integer
    add_index :users, :gender_id
  end
end
