class Program < ApplicationRecord
  belongs_to :teacher
  has_many :donations


  def find_funds_raised
    sum = 0
      self.donations.each do |d|
          sum += d.amount
      end
    sum
  end
end
