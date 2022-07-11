class CommentsController < ApplicationController
    # before_action :get_recommendation
    def index 
        render json: Comment.all 
    end 

    def create 
        comment=current_user.comments.create!(comment_params)
        render json: comment, status: :created 
    end 

    def show 
        comment=find_comment
        render json: comment 
    end 

   

    private

    def find_comment
        Comment.find(params[:id])
    end 

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def comment_params
        params.permit(:content, :recommendation_id)
    end 
    # def get_recommendation
    #     @recommendation = Recommendation.find(params[:recommendation_id])
    #   end

end
