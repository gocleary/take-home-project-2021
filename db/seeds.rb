# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
pam = User.create!(first_name: 'Pam', last_name: 'Beesly', email: 'pam@gocleary.com')
michael = User.create!(first_name: 'Michael', last_name: 'Scott', email: 'michael@gocleary.com')

allhands = Event.create!(title: 'April 2021 All-Hands', creator_id: michael.id)
allhands.questions.create!(content: 'What are the details of our next annual offsite?', creator_id: pam.id)
allhands.questions.create!(
  content: 'Big thank you from the engineering team to the customer success team for the help with the most recent p0 incident.',
  creator_id: michael.id
)
