Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :tracks, only: [:index, :create, :show, :update, :destroy]
  end
  root to: 'static_pages#index'
end
