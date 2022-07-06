class Like < ApplicationRecord
  validates :user_id, uniqueness: {scope: :recommendation_id}
  belongs_to :user
  belongs_to :recommendation
end
