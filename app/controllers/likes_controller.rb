class LikesController < ApplicationController
     

        def index 
            render json: current_user.likes 

        end 

        def create 
            like = current_user.likes.create!(like_params)
            render json: like, status: :created 
        end 

    def destroy 
        like = current_user.likes.find(params[:id]) 
        like.destroy
    end 

    private

    def like_params
        params.permit(:recommendation_id)
    end 

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def current_rec
        Recommendation.find_by(id: session[:user_id])
    end 

end 

    
