class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :airport
end
