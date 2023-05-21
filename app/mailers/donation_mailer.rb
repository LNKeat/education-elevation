class DonationMailer < ApplicationMailer

  def donation_email
    donation = params[:donation]
    @user = donation.user
    mail(to: @user.email, subject: 'Thank you for your donation!')
  end
end
