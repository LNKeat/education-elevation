class DonationMailer < ApplicationMailer
    default from: 'notifications@example.com'

  def donation_email
    @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Your generous donation')
  end
end
