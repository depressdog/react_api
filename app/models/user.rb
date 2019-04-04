class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :taggings
  has_many :tags, through: :taggings
  has_many :courses, dependent: :destroy
  belongs_to :gender

  mount_uploader :avatar, AvatarUploader
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

  def all_tags
    self.tags.map(&:name).join(', ')
  end
  def all_tags=(names)
    self.tags = names.split(',').map do |name|
      Tag.where(name: name.strip).first_or_create!
    end
  end
end
