u1 = User.create!(username:"danesh", email:"danesh@danesh.com")
u2 = User.create!(username:"sam", email:"sam@sam.com")

Message.create!(
  body:"test test 1 2",
  subject:"hiya bbz",
  sender_id:1,
  receiver_id:2
)
