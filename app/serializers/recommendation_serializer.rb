class RecommendationSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image, :likes
  has_one :user 
end
