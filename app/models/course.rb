class Course < ApplicationRecord
  belongs_to :category
  belongs_to :subcategory
  belongs_to :subsubcategory
end
