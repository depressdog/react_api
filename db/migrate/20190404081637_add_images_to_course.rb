class AddImagesToCourse < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :image1, :string
  end
end
