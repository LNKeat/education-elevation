class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :program

  validates :amount, presence: true
  validate :donation_min

  def donation_min
    if self.amount < 10
      self.errors.add(:donation, "minimum is $10")
    end
  end

end
