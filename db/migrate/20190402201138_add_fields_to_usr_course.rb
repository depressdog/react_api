class AddFieldsToUsrCourse < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :phone, :string
    add_column :users, :education, :string
    add_column :users, :video_url, :string
    add_column :users, :age, :integer
    add_column :courses, :price, :integer
    add_column :courses, :user_id, :integer
  end
end
