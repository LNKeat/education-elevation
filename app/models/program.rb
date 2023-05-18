class Program < ApplicationRecord
  belongs_to :teacher
  has_many :donations

  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 20 }

  def find_funds_raised
    sum = 0
      self.donations.each do |d|
          sum += d.amount
      end
    sum
  end
end
