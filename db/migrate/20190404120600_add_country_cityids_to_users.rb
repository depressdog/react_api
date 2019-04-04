class AddCountryCityidsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :country_id, :integer
    add_index :users, :country_id
    add_column :users, :city_id, :integer
    add_index :users, :city_id
  end
end
