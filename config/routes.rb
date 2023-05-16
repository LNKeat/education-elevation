Rails.application.routes.draw do 
  resources :donations
  resources :programs
  resources :teachers
  resources :users, only: [:index, :create]

  post "/login", to: "sessions#create"
end
