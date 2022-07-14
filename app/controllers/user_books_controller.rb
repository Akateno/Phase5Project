class UserBooksController < ApplicationController
    def index 
        render json: current_user.user_books
    end 

    def create 
        book=current_user.user_books.create!(book_params)
        render json: book, status: :created 
    end 

    def show 
        book=find_book
        render json: book 
    end 
    def destroy 
        like = current_user.user_books.find(params[:id]) 
        like.destroy
    end 
   

    private

    def find_book
        UserBook.find(params[:id])
    end 

   

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def book_params
        params.permit(:title, :author, :image, :previewLink)
    end 
end
