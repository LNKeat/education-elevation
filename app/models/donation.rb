class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :program

  validates :amount, presence: true, comparison: { greater_than: 0 }
end
