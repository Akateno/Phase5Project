class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id
  has_one :recommendation
  has_one :user
end
