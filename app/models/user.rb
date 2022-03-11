class User < ApplicationRecord
    has_secure_password
    has_many :plants
    has_many :plant_types
    has_many :updates, through: :plants
    # has_many :comments, through: :plants
    has_many :plant_types, through: :plants

    validates :name, presence: true
    accepts_nested_attributes_for :plants
    accepts_nested_attributes_for :updates
    #has_one_attached :profile_picture
    users = User.includes(plants: :update)
end
