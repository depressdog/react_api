class Course < ApplicationRecord
  belongs_to :category
  belongs_to :subcategory, optional: true
  belongs_to :subsubcategory, optional: true
end
