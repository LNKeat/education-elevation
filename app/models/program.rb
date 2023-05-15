class Program < ApplicationRecord
  belongs_to :teacher
  has_many :donations
end
