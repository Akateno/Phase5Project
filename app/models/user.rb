class User < ApplicationRecord
    has_secure_password 
    
    has_many :recommendations
    has_many :user_books
    has_many :likes
    has_many :comments
    
end
