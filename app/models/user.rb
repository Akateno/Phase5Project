class User < ApplicationRecord
    has_secure_password 
    
    has_many :recommendations,  dependent: :destroy 
    has_many :user_books, dependent: :destroy 
    has_many :likes, dependent: :destroy 
    has_many :comments, dependent: :destroy 
    
end
