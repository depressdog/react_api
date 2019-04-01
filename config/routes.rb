Rails.application.routes.draw do
  get 'subcategories/index'
  get 'categories/index'
  namespace :api do
    namespace :v1 do
      resources :categories
      resources :subcategories
      resources :subsubcategories
    end
  end
  resources :courses
  resources :categories
  resources :subcategories
  resources :subsubcategories
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
