Rails.application.routes.draw do 
  resources :programs
  resources :teachers
  resources :users, only: [:index, :create]

end
