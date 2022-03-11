class UpdateSerializer < ActiveModel::Serializer
  attributes :id,:status,:comment,:user_id,:plant_id
  belongs_to :user
  belongs_to :plant
end
