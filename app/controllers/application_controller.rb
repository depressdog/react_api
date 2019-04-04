class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit :account_update, keys: [:phone, :email, :username, :password,
                                                                :password_confirmation, :remember_me, :education,
                                                                :video_url, :age, :body, :avatar]
    end
end
