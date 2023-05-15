class User < ApplicationRecord
    has_secure_password
    has_many :donations

    def set_tier
        sum = self.donations_sum
        case
        when sum <= 500 
            "bronze"
        when sum > 500 && sum <= 2000
            "silver"
        when sum > 2000 && sum <= 5000
            "gold"
        else
            "platinum"
        end
    end

    def find_donations_sum 
        sum = 0
        self.donations.each do |d|
            sum += d.amount
        end
        sum
    end
    
end
