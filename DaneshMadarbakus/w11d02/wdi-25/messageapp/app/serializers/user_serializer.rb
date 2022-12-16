class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :messages_sent, :messages_received
end
