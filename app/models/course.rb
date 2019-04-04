class Course < ApplicationRecord
  belongs_to :category
  belongs_to :subcategory, optional: true
  belongs_to :subsubcategory, optional: true
  belongs_to :user

  mount_uploader :image1, AvatarUploader
  mount_uploader :image2, AvatarUploader
  mount_uploader :image3, AvatarUploader
  mount_uploader :image4, AvatarUploader
  mount_uploader :image5, AvatarUploader
  mount_uploader :image6, AvatarUploader
  mount_uploader :image7, AvatarUploader
  mount_uploader :image8, AvatarUploader
  mount_uploader :image9, AvatarUploader
  mount_uploader :image10, AvatarUploader

end
