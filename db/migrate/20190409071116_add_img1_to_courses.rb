class AddImg1ToCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :img1, :string
  end
end
