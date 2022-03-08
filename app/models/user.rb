class User < ApplicationRecord
    has_secure_password
    has_many :plants
    has_many :plant_types
    has_many :comments, through: :plants
    has_many :plant_types, through: :plants

    validates :name, presence: true
    #has_one_attached :profile_picture
end
