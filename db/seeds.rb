5.times{
    donation = rand(200...10000)
    user = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "cat", password_confirmation:"cat", donations_sum: donation)
    user.donor_tier = user.set_tier
    user.save
}
# t.stzring "first_name"
#     t.string "last_name"
#     t.string "email"
#     t.string "password_digest"
#     t.string "donor_tier"
#     t.integer "donations_sum"



p "You're killing it, Laura!"
