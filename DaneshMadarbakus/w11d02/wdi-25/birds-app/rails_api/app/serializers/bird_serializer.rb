class BirdSerializer < ActiveModel::Serializer
  attributes :id, :name, :latin_name, :family, :image
end
