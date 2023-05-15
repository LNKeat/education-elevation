class DonationsController < ApplicationController

    def index 
        donations = Donation.all 
        render json: donations
    end

    def create
        donation = Donation.create!(params_permit)
        render json: donation, status: :created
    end

    def destroy
        donation = Donation.find(params[:id])
        donation.destroy
        head :no_content
    end

    private

    def params_permit
        params.permit(:amount, :user_id, :program_id)
    end
end
