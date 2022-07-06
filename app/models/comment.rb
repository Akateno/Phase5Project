class Comment < ApplicationRecord
  belongs_to :recommendation
  belongs_to :user
end
