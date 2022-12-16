user = User.create!(username: "danesh", email: "danesh@danesh.com")

Event.create!(
  name: "WDI25 Grad Ball",
  date: Date.new(2017, 4, 28),
  location:"GA Campus",
  user: user
)
