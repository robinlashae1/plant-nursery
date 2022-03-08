class PlantTypeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers 
  attributes :id,:name,:image,:description, :nursery_picture
  
  def nursery_picture
       if object.nursery_picture.attached?
         {url: rails_blob_path(object.nursery_picture,only_path: true)}
       end
    end
end
