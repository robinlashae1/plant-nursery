class Update < ApplicationRecord
    belongs_to :user
    belongs_to :plant

    validates :comment, presence: true
    validates :status, presence: true
end
