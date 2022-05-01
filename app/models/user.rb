class User < ApplicationRecord
    has_secure_password(options={validations:false})
    has_many :plants
    has_many :plant_types
    has_many :updates, through: :plants
    # has_many :comments, through: :plants
    has_many :plant_types, through: :plants

    validates :name, presence:{ message: "Please enter a name"}
    validates :username, presence:{ message: "Username must exist"}, uniqueness:{ message: "Username taken"}
    validates :password, length: { minimum: 6, message: "Your password must contain at least 6 characters"}
    validates :email, uniqueness:{message: "Email taken"}

    accepts_nested_attributes_for :plants
    accepts_nested_attributes_for :updates
    #has_one_attached :profile_picture
    users = User.includes(plants: :update)

   
end
