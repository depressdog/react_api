class AddBodyToCourse < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :body, :text
  end
end
