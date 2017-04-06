require 'date'

class Person

  attr_reader :dob
  attr_accessor :name

  NUMBER_OF_LEGS = 2

  @@count = 0

  def self.count
    @@count
  end

  def initialize(name, dob)
    @@count += 1
    @name = name
    @dob = dob
  end

  def talk(words)
    puts "I say, #{words}"
  end
end

class Student < Person

  attr_reader :courses

  def initialize(name, dob)
    super(name, dob)
    @courses = []
  end

  def add_course(course)
    raise 'Invalid course' unless ['JS', 'Ruby'].include?(course)
    @courses << course
  end
end

Person.new "Bob", Date.new(1990,9,9)
thad = Student.new "Thad", Date.new(1985,1,2)

thad.add_course "Ruby"
thad.add_course "JS"

thad.talk "I love ruby"
