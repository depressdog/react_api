class Api::V1::CountriesController < ApplicationController
  def index
    @countries = Country.order("updated_at desc")

    render json: @countries
  end

  def show
    @country = Country.find(params[:id])
    render json: @country
  end

  def create
    @country = Country.new(cat_params)

    if @country.save
      render json: @country
    else
      render json: @country.errors
    end
  end

  def update
    @country = Country.find(params[:id])
    @country.update_attributes(cat_params)
    render json: @country
  end
  def destroy
    @country = Country.find(params[:id])
    if @country.destroy
      head :no_content, status: :ok
    else
      render json: @country.errors, status: :unprocessable_entity
    end
  end
  private
    def cat_params
      params.require(:country).permit(:name)
    end
end
