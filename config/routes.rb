Rails.application.routes.draw do
  get 'genders/new'
  devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations', only: [:update]
  }


  get 'courses/index'
  get 'subcategories/index'
  get 'categories/index'

  namespace :api do
    namespace :v1 do
      resources :categories
      resources :subcategories
      resources :subsubcategories
      resources :courses
    end
  end

  resources :courses
  resources :categories, only: [:index]
  resources :subcategories, only: [:index]
  resources :subsubcategories, only: [:index]
  resources :users, only: [:show]
  resources :genders
  resources :tags

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
