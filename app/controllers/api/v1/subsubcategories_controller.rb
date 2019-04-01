class Api::V1::SubsubcategoriesController < ApplicationController
  def index
    @subsubcategories = Subsubcategory.order("subcategory_id")

    render json: @subsubcategories
  end

  def show
    @subsubcategories = Subsubcategory.find(params[:id])
    render json: @subsubcategories
  end

  def create
    @subsubcategories = Subsubcategory.new(subsubcat_params)

    if @subsubcategories.save
      render json: @subsubcategories
    else
      render json: @subsubcategories.errors
    end
  end

  def update
    @subsubcategories = Subsubcategory.find(params[:id])
    @subsubcategories.update_attributes(subsubcat_params)
    render json: @subsubcategories
  end
  def destroy
    @subsubcategories = Subsubcategory.find(params[:id])
    if @subsubcategories.destroy
      head :no_content, status: :ok
    else
      render json: @subsubcategories.errors, status: :unprocessable_entity
    end
  end
  private
    def subsubcat_params
      params.require(:subsubcategory).permit(:name, :subcategory_id )
    end
end
