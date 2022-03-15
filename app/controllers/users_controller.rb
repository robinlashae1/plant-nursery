class UsersController < ApplicationController
    def index
        users = User.all
        render json: users.to_json(include: { plants: { include: :updates } } )
    end
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.to_json(include: { plants: { include: :updates } } )
        else
            render json: {error: "Not authorized"}, status: unauthorized
        end
    end
    def plants
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.plants
        else
            render json: {error: "Not authorized"}, status: unauthorized
        end
    end

    private
    
    def user_params
        params.permit(:username,:name, :email, :password, :password_confirmation)
    end
end
#