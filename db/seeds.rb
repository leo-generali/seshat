# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_basic_info = BasicInfo.create(
  first_name: "Abraham",
  last_name: "Lincoln",
  email: "lincolnlogs@aol.com",
  tel: "555-555-5555",
  linkedin: "linkedin.com/abe",
  github: "HonestAbe",
  website: "https://honestabe.biz",
)

resume = Resume.create(
  basic_info: test_basic_info
)
