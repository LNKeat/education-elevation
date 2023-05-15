class Teacher < ApplicationRecord
    has_many :programs, dependent: :destroy


end
