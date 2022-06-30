# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "📃 Seeding data..."

book1= Book.create(title: "Things we never got Over", author: "Lucy Score", image: "https://m.media-amazon.com/images/I/41qiZpKBDvL.jpg")
book2= Book.create(title: "Lessons in Chemistry", author: "Bonnie Garmus", image: "https://m.media-amazon.com/images/I/416pvaBPngL.jpg")
book3= Book.create(title: "The Locked Door", author: "Freida Mcfadden", image: "https://m.media-amazon.com/images/I/41OfSb7-3oL.jpg")

puts "✅ Done seeding"