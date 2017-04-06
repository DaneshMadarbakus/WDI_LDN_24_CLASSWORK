require 'date'

class Student

  attr_reader :classes, :graduation, :placeofstudy, :enrollment

  def initialize(placeofstudy, enrollment)
    @placeofstudy = placeofstudy
    @enrollment = enrollment
    @graduation = enrollment + (12*7)
    @classes = []
  end

  def add_class(class)
    raise 'Invalid class' unless ['JS', 'Ruby', 'UX'].include?(class)
    @classes << class
  end

end

class Vehicle

  attr_reader :manufacture_date, :license_plate
  attr_accessor :owner, :color, :sale_price

  def initialize(license_plate, manufacture_date, color, owner, sale_price)

    raise 'Invalid date' unless manufacture_date.is_a? Date

    @license_plate = license_plate
    @manufacture_date = manufacture_date
    @color = color
    @owner = owner
    @sale_price = sale_price
  end
  #
  # def change_color(color)
  #   @color = color
  # end
  #
  # def change_owner(owner)
  #   @owner = owner
  # end
  #
  # def change_sale_price(sale_price)
  #   @sale_price = sale_price
  # end
end

class Car < Vehicle

  attr_reader :transmission

  WHEELS = 4

  def initialize(license_plate, manufacture_date, color, owner, sale_price, transmission)
    super(license_plate, manufacture_date, color, owner, sale_price)
    self.transmission = (transmission)
  end
  def add_transmission(transmission)
    raise 'Invalid transmission' unless ['Automatic', 'Manual'].include? transmission
    @transmission = transmission
  end
end

class Motorbike < Vehicle
  WHEELS = 2
  def initialize(license_plate, manufacture_date, color, owner, sale_price)
    super(license_plate, manufacture_date, color, owner, sale_price)
  end
end

class Product

  attr_reader :sku
  attr_accessor :name, :origin, :color, :description, :price, :image

  E_COMMERCE_SITE = web_commerce

  def initialize(name, origin, color, description, price, sku, image)
    @name = name
    @color = color
    @description = description
    @price = price
    @sku = sku
    @image = image
  end
end

class Cart
  E_COMMERCE_SITE = web_commerce

  def initialize
    @products = []
  end

  def add_to_cart(product)
    raise 'Invalid product' unless product.is_a? product
    @products << product
  end

  def total
    @products.map(&:price).inject(:+)
  end
end
