Rails.application.routes.draw do 
  resources :donations
  resources :programs
  resources :teachers
  resources :users, only: [:index, :create]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
end
