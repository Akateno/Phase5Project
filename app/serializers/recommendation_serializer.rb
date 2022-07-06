class RecommendationSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image
  has_one :user 
  has_many :likes 
  has_many :comments
end
