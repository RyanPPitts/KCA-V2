Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :chores, only: [:index, :create, :destroy, :update]
    end
  end

  root to: 'homepage#index'

  devise_for :admins, path: 'admins'
  devise_for :users, path: 'users'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
