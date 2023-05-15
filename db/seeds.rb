#creates an amount for a donation, funds raised or funds needed
def generate_amount
    num = rand(2...10)
    num * 100
end

#creates a bio for teachers
def generate_bio(teacher)
    degree = Faker::Educator.degree
    emo = Faker::Emotion.adjective
    quote = Faker::GreekPhilosophers.quote
    bio = teacher.first_name + " has a " + degree + ". Some describe them as " + emo + ". They have been known to say: " + quote
    bio
end

# makes 10 users that are not admin
10.times {
    donation = generate_amount()
    user = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "cat", password_confirmation:"cat", donations_sum: 0, role: "donor")
}
#makes one admin user
User.create(first_name: "Laura", last_name: "Keat", email: Faker::Internet.email, password: "cat", password_confirmation:"cat", donations_sum: 0, role: "admin")

# makes 4 teachers
4.times {
    teacher = Teacher.create!(first_name: Faker::Name.first_name, bio: "", last_name: Faker::Name.last_name)
    teacher.bio = generate_bio(teacher)
    teacher.save
}

# makes 3 programs
4.times {
    needed = generate_amount()
    raised = needed/rand(1..4)
    t_id = Teacher.all.sample.id 
    Program.create!(teacher_id: t_id, funds_needed: needed, funds_raised: raised)
}

    p1 = Program.first
    p2 = Program.second
    p3 = Program.third
    p4 = Program.fourth

    p1.name = "DND for Social Development"
    p1.description = "This popular role playing game is a great way for teenagers that struggle with social cues, etiquette and interactions in general."
    p1.save

    p2.name = "Horse IQ"
    p2.description = "Students will learn to take care of a horse and riding equipment while building lifelong connections with other teens and furry friends alike."
    p2.save
    
    p3.name = "Club Soccer"
    p3.description = "Great for anyone that loves soccer from beginner to experienced. No try-outs, just come join and play. "
    p3.save

    p4.name = "Debate Debacle"
    p4.description = "Students will work on public speaking and reasoning under stress in a challenging but friendly environment."
    p4.save

# make donations
    10.times{
        u_id = User.all.sample.id
        p_id = Program.all.sample.id
        Donation.create(amount:generate_amount, user_id: u_id, program_id: p_id)
    }

#find sum and set tier for donations on each user
    User.all.each do |user|
        user.donations_sum = user.find_donations_sum
        user.donor_tier = user.set_tier
        user.save
    end

p "You're killing it, Laura!"
