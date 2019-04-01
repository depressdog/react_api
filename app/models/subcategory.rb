class Subcategory < ApplicationRecord
  belongs_to :category
  has_many :subsubcategories, dependent: :destroy
end
