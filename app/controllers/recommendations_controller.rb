class RecommendationsController < ApplicationController
    def index 
        render json: Recommendation.all 
    end 

    def create 
        book=current_user.recommendations.create!(book_params)
        render json: book, status: :created 
    end 

    def update
        book=find_book
        book.update!(like_params)

    end 

    private

    def find_book
        Recommendation.find(params[:id])
    end 

    def like_params
        params.permit(:likes)
    end 

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def book_params
        params.permit(:title, :author, :image)
    end 

end
