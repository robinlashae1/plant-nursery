class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name,:age,:plant_type_id, :created_at
  belongs_to :user
  belongs_to :plant_type
  has_many :updates
end
