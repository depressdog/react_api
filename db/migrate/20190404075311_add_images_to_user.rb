class AddImagesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :image1, :string
    add_column :users, :image2, :string
    add_column :users, :image3, :string
    add_column :users, :image4, :string
    add_column :users, :image5, :string
    add_column :users, :image6, :string
    add_column :users, :image7, :string
    add_column :users, :image8, :string
    add_column :users, :image9, :string
    add_column :users, :image10, :string
  end
end
