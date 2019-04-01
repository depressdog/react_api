class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.order("updated_at desc")

    render json: @categories
  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def create
    @category = Category.new(cat_params)

    if @category.save
      render json: @category
    else
      render json: @category.errors
    end
  end

  def update
    @category = Category.find(params[:id])
    @category.update_attributes(cat_params)
    render json: @category
  end
  def destroy
    @category = Category.find(params[:id])
    if @category.destroy
      head :no_content, status: :ok
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end
  private
    def cat_params
      params.require(:category).permit(:name)
    end
end
