class Plant < ApplicationRecord
    belongs_to :user
    has_many :updates, dependent: :destroy
    belongs_to :plant_type
    

    validates :name, presence: true
    validates :plant_type_id, presence: true
end
