# stations_v = {"n-times_square" => 4, "n-34th" => 3, "n-28th"=> 2, "n-23rd"=> 1, "n-union_square" => 0, "n-8th" => 1, "l-8th" => 2, "l-6th" => 1, "l-union_square" => 0, "l-3rd" => 1, "l-1st" => 2, "six-general_central" => 4, "six-33rd" => 3, "six-28th" => 2, "six-23rd" => 1, "six-union_square" => 0, "six-astor_place" => 1}
#
# stations = ["n-times_square", "n-34th", "n-28th", "n-23rd", "n-union_square", "n-8th", "l-8th", "l-6th", "l-union_square", "l-3rd", "l-1st", "six-general_central", "six-33rd", "six-28th", "six-23rd", "six-union_square", "six-astor_place"]
#
# puts "Which station you are at?", stations
#   current_location = gets.to_str
# # puts "which station do you want to go to?", stations
# #   destination = gets.to_str
# puts stations_v[current_location]

lines = ["n", "l", "six"]
n = ["times square", "34th", "28th", "23rd", "union square", "8th"]
l = ["8th", "6th", "union square", "3rd", "1st"]
six = ["general central", "33rd", "28th", "23rd", "union square", "astor place"]


puts "Which line are you on?", lines
current_line = gets.to_str

puts "Which stop are you on?";
if current_line == n
  puts "available stops:", n
elsif current_line == l
  puts "avaiable stops:", l
else
  puts "available stops:", six
  current_stop = gets.to_str

puts "Which line do you want to get off at?", lines
  destination_line = gets.to_str

puts "Which stop do you want to get off at?";
if destination_line == n
  puts "available stops:", n
elsif destination_line == l
  puts "available stops:", l
else
  puts "available stops:", six
  destination_stop = gets.to_str



end
end
