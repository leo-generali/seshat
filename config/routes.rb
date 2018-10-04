Rails.application.routes.draw do
  scope '/api' do
    resources :basic_infos
  end

  namespace :admin do
    resources :basic_infos, only: %i(index show new create edit update destroy)

    root to: "basic_infos#index" # <--- Root route
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
