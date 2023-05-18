class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :program

  validates :amount, presence: true

  # TODO:add validation here
  validate :donation_min

  def donation_min
    if self.amount < 10
       self.errors.add(:amount, "must be $10 or more.")
    end
  end

end
