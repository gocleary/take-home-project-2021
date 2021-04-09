Rails.application.routes.draw do
  namespace :api, constraints: { format: :json } do
    resources :events, only: [:show] do
      resources :questions, only: [:index]
    end

    resources :questions, except: [:update] do
      resources :answers, only: [:create]
    end

    resources :users, only: [:index]
  end

  get '*path' => 'pages#home', constraints: ->(request) { request.format == :html }

  root to: 'pages#home'
end
