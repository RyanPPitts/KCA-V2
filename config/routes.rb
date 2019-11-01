Rails.application.routes.draw do
  get 'account/index'
  get 'account/choreslist'
  resources :chores
  devise_for :admins, path: 'admins', controllers: { sessions: "admins/sessions"}
  devise_for :users, path: 'users', controllers: { sessions: "users/sessions"}
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
