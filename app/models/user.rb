class User < ApplicationRecord
    has_secure_password

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
    
end
