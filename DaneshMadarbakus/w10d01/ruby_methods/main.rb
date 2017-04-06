# 10.times { puts "hello" }

# 10.times do
#   puts "hello"
# end

# 10.times do |n|
#   puts "The number is #{n}"
# end

# names = %w(Fred Wilma Barney Betty)

# for i in 0..names.size
#   puts names[i]
# end

# names.each { |name| puts name }

# names.each do |name|
#   puts name
# end

# hash = { foo: 1, bar: 2}
# hash.each { |key, value| puts "key was #{key}, value was #{value}" }

# arr = []
# (1..10).each { |i| arr << i if i.odd? }
# print arr

# names = %w(Fred Wilma Barney Betty)
#
# names.each_with_index do |name, index|
#   puts "#{index}: #{name}"
# end

# numbers = (1..10).to_a
# print numbers
#
# numbers_as_strings = numbers.map { |num| num.to_s }
# print numbers_as_strings

# names = %w(Fred Wilma Barney Betty)
#
# reversed_names = names.map { |name| name.reverse }
# print reversed_names

# answer = (5..10).reduce { |sum, n| sum + n }
# print answer
#
# answer = (5..10).reduce(:+)
# print answer

# answer = (5..10).reduce { |product, n| product * n }
# puts answer

# names = %w(Fred Wilma Barney Betty)
#
# longest = names.reduce do |memo, word|
#   memo.length > word.length ? memo : word
# end
#
# puts longest

# answer = (1..10).select { |i| i.odd? }
# p answer

# answer = (1..10).find_all { |i| i.even? }
# p answer

# answer = [2,3,4,5,6,7,8].any? { |i| i % 2 == 0 }
# p answer

answer = [2,3,4,5,6,7,8].all? { |i| i % 2 == 0 }
p answer
