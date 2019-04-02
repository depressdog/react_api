class AddfieldsToCourse < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :phone, :string
    add_column :courses, :email, :string
    add_column :courses, :education, :string
    add_column :courses, :age, :string
    add_column :courses, :video_url, :string
  end
end
