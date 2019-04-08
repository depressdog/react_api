class Api::V1::UsersController < ApplicationController
  def index
    @users = User.order("updated_at desc")

    render json: @users
  end
  def show
    @user = User.find(params[:id])

    render json: @user
  end
end
