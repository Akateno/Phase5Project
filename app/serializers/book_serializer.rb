class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image, :user_id, :review_id
end
