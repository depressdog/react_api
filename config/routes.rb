Rails.application.routes.draw do
  devise_for :users
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
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
