class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    #sign-up

    def create
        user = User.create!(user_params)
        # TODO: add user to session here
        render json: user
    end


    private

    def user_params
        params.permit(:first_name, :last_name, :password, :password_confirmation, :email, :donor_tier, :donations_sum)
    end
end
