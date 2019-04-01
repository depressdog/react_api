class Subsubcategory < ApplicationRecord
  belongs_to :subcategory
  has_many :courses
end
