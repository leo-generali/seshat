Rails.application.routes.draw do
  scope '/api' do
    resources :basic_infos
  end

  namespace :admin do
    resources :basic_infos, only: %i(index show new create edit update destroy)

    root to: "basic_infos#index" # <--- Root route
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end 
end
