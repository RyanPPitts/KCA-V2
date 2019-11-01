Rails.application.routes.draw do
  root 'homepage#index'

  get 'account/index'
  get 'account/choreslist'

  resources :chores
  
  devise_for :admins, path: 'admins'
  devise_for :users, path: 'users'
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
