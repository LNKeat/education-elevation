class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

 #sign-up & set session to user
    def create
        user = User.create!(user_params)
        user.donations_sum = user.find_donations_sum
        user.donor_tier = user.set_tier
        user.save

        session[:user_id] = user.id
        render json: user
    end

    def show 
        user = User.find(session[:user_id])
        render json: user
    end



    private

    def user_params
        params.permit(:first_name, :last_name, :password, :password_confirmation, :email, :role)
    end
end
