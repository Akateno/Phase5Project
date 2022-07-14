class Comment < ApplicationRecord
  belongs_to :recommendation
  belongs_to :user

  validates :content, length: {minimum: 3}
end
