User.create(first_name:"Laura", last_name:"Keat", email: "user@domain.com", password:"dog", password_confirmation:"dog", donations_sum:2000
)

Teacher.create(first_name: "Cindy", last_name: "Keat", bio: "Horse back riding instructor", funds_needed: "10,000", funds_raised:1500)

t_id = Teacher.last.id
Program.create(name: "Horse Etiquette", description: "Learn  how to interact safely with horses", teacher_id: t_id, funds_needed: 15000, funds_raised: 1700)

p "You're killing it!"
