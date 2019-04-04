class Api::V1::CitiesController < ApplicationController
  def index
    @cities = City.order("updated_at desc")

    render json: @cities
  end

  def show
    @city = City.find(params[:id])
    render json: @city
  end

  def create
    @city = City.new(city_params)

    if @city.save
      render json: @city
    else
      render json: @city.errors
    end
  end

  def update
    @city = City.find(params[:id])
    @city.update_attributes(city_params)
    render json: @city
  end
  def destroy
    @city = City.find(params[:id])
    if @city.destroy
      head :no_content, status: :ok
    else
      render json: @city.errors, status: :unprocessable_entity
    end
  end
  private
    def city_params
      params.require(:city).permit(:name, :country_id)
    end
end
