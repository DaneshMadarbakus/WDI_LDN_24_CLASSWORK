class Album < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :genres
end
