Rails.application.routes.draw do

  scope '/api/v1' do
    resources :chores
    end

  root 'homepage#index'
  get 'account/index'
  get 'account/choreslist'
  devise_for :admins, path: 'admins'
  devise_for :users, path: 'users'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
