class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :donor_tier, :donations_sum, :role
end
