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
        send_thank_you(donation)
        render json: donation, status: :created
    end

    def send_thank_you(donation)
        #call method in create action
        user = donation.user
    
        respond_to do |format|
            # Tell the UserMailer to send a thank you email after save
            UserMailer.with(donation: donation).donation_email.deliver_later
        end
      end

    private

    def params_permit
        params.permit(:amount, :user_id, :program_id)
    end
end
