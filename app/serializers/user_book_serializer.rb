class UserBookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image, :user_id
end
