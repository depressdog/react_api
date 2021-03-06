class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit :account_update, keys: [:phone,
                                                                :email,
                                                                :username,
                                                                :password,
                                                                :password_confirmation, :remember_me, :education,
                                                                :video_url,
                                                                :age, :body,
                                                                :avatar,
                                                                :gender_id,
                                                                :image1,
                                                                :image2,
                                                                :image3,
                                                                :image4,
                                                                :image5,
                                                                :image6,
                                                                :image7,
                                                                :image8,
                                                                :image9,
                                                                :image10,
                                                                :all_tags,
                                                                :country_id,
                                                                :city_id ]
    end


end
