class UpdateSerializer < ActiveModel::Serializer
  attributes :id,:status,:comment,:user_id,:plant_id
end
