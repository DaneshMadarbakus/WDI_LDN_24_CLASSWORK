# a = false
#
# puts "hello" if a
#
# if a
#   puts "hello"
# else
#   puts "bye"
# end
#
# if a then puts "hello" else puts "bye" end
#
# if a; puts "hello"; else; puts "bye"; end

# puts "Enter an integer: "
# n = gets.to_i
# if n > 0
#   puts "Number is positive"
# elsif n < 0
#   puts "Number is negative"
# else
#   puts "Your number is zero"
# end
#
# unless n > 10
#   puts "Too small..."
# else
#   puts "LARGE number"
# end

# puts "Enter an integer: "
# n = gets.to_i
# case true
# when n > 0
#   puts "Number is positive"
# when n < 0
#   puts "Number is negative"
# else
#   puts "Your number is zero"
# end

# n = 1
# while n < 11
#   puts n
#   n = n + 1
# end
# puts "Done!"
#
# n = 1
# until n > 10
#   puts n
#   n = n + 1
# end
# puts "Done!"
#
# for i in 1..10
#   puts i
# end
# puts "done now"
#
# for i  in 0..5
#   break if i > 2
#   puts "The number is #{i}"
# end

# n = 1
# while n < 1000
#   n += 1
#   puts n
#   next unless n == 10
#   break
# end


# puts "Guess my number"
# answer = gets.to_f
# if answer > 10.0
#   puts "Too high, guess again"
# elsif answer < 10.0
#   puts "Too low, guess again"
# else
#   puts "Correctumundo!"
# end

g = 0
n = 5
puts "Guess a number between 1 and 10:"
while g != n
  g = gets.to_i
  if g > n
    puts "too high guess again"
  elsif g < n
    puts "too low guess again"
  end
end
puts "You're right!"
