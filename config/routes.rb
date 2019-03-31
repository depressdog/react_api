Rails.application.routes.draw do
  get 'categories/index'
  namespace :api do
    namespace :v1 do
      resources :categories
    end
  end
  resources :categories
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
