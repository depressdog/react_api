class AddCategoriesToCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :category_id, :integer
    add_column :courses, :subcategory_id, :integer
    add_column :courses, :subsubcategory_id, :integer
  end
end
