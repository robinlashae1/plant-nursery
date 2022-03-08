class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :username, :name, :email
  #, :profile_picture
  has_many :plants

  # def profile_picture
  #   if object.profile_picture.attached?
  #     {url: rails_blob_path(object.profile_picture,only_path: true)}
  #   end
  # end
  
end
