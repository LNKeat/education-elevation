class DonationsController < ApplicationController

    def index 
        donations = Donation.all 
        render json: donations
    end

    def create
        donation = Donation.create!(params_permit)
        program = donation.program
        donor = donation.user
        donor.donations_sum = donor.find_donations_sum
        donor.donor_tier = donor.set_tier
        program.funds_raised = program.find_funds_raised
        donor.save
        program.save
        #kicks off donation email
        
        DonationMailer.with(donation: donation).donation_email.deliver_now
        
        render json: donation, status: :created
    end


    private

    def params_permit
        params.require(:donation).permit(:amount, :user_id, :program_id)
    end
end
