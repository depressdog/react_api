Rails.application.routes.draw do

  devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations', only: [:update]
  }

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end

  get 'genders/new'
  get 'courses/index'
  get 'subcategories/index'
  get 'categories/index'
  get 'cities/index'
  get 'countries/index'

  namespace :api do
    namespace :v1 do
      resources :categories
      resources :subcategories
      resources :subsubcategories
      resources :courses
      resources :countries
      resources :cities
      resources :users
    end
  end

  resources :courses
  resources :categories, only: [:index]
  resources :subcategories, only: [:index]
  resources :countries, only: [:index]
  resources :cities, only: [:index]
  resources :subsubcategories, only: [:index]
  resources :users, only: [:show]
  resources :genders
  resources :tags

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
