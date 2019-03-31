class Api::V1::SubcategoriesController < ApplicationController
  def index
    @subcategories = Subcategory.order("updated_at desc")

    render json: @subcategories
  end

  def create
    @subcategories = Subcategory.new(subcat_params)

    if @subcategories.save
      render json: @subcategories
    else
      render json: @subcategories.errors
    end
  end

  def update
    @subcategories = Subcategory.find(params[:id])
    @subcategories.update_attributes(subcat_params)
    render json: @subcategories
  end
  def destroy
    @subcategories = Subcategory.find(params[:id])
    if @subcategories.destroy
      head :no_content, status: :ok
    else
      render json: @subcategories.errors, status: :unprocessable_entity
    end
  end
  private
    def subcat_params
      params.require(:subcategory).permit(:name, :category_id )
    end
end
