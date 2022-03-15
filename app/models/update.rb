class Update < ApplicationRecord
    belongs_to :user
    belongs_to :plant

    validates :status, presence: true
end
