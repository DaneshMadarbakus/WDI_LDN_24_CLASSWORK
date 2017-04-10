class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname
  has_many :posts

  def fullname
    "#{object.firstname} #{object.lastname}"
  end
end
