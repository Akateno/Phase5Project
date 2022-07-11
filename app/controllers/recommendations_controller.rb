class RecommendationsController < ApplicationController
    def index 
        render json: Recommendation.all 
    end 

    def create 
        book=current_user.recommendations.create!(book_params)
        render json: book, status: :created 
    end 

    def show 
        book=find_book
        render json: book 
    end 

   

    private

    def find_book
        Recommendation.find(params[:id])
    end 

   

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def book_params
        params.permit(:title, :author, :image, { comment: [:content, :recommendation_id]})
    end 

end
