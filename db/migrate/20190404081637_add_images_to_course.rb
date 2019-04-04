class AddImagesToCourse < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :image1, :string
    add_column :courses, :image2, :string
    add_column :courses, :image3, :string
    add_column :courses, :image4, :string
    add_column :courses, :image5, :string
    add_column :courses, :image6, :string
    add_column :courses, :image7, :string
    add_column :courses, :image8, :string
    add_column :courses, :image9, :string
    add_column :courses, :image10, :string
  end
end
