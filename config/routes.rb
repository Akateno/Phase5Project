Rails.application.routes.draw do
  resources :comments
  resources :user_books
  resources :recommendations
  resources :books
  resources :users
  resources :likes, only: [:create, :destroy, :index]
  #session controller
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #user controller 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
