Rails.application.routes.draw do
  scope :api do
    resources :birds
  end
end
