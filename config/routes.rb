# Rails.application.routes.draw do
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

# #   # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
# #   # Can be used by load balancers and uptime monitors to verify that the app is live.
# #   get "up" => "rails/health#show", as: :rails_health_check

# #   # Defines the root path route ("/")
# #   # root "posts#index"
# # end

# # config/routes.rb
# Rails.application.routes.draw do
#   namespace :api do
#     namespace :v1 do
#       resources :users, only: [:create]
#       resources :websites, only: [:index, :create]
#       resources :website_activities, only: [:create]
#       resources :website_categories, only: [:index]
#     end
#   end
# end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/login', to: 'authentications#login'
      post '/register', to: 'authentications#register'
      delete '/logout', to: 'authentications#logout'
      
      resources :websites
      resources :website_activities
      get '/analytics', to: 'analytics#index'
    end
  end
end
