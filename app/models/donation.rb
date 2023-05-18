class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :program

  validates :amount, presence: true

  # TODO:add validation here
  # validate :greater_than_ten

  # def greater_than_ten
  #   if self.amount < 10
  #      self.errors.add("Donation must be $10 or more.")
  #   end
  # end

end
