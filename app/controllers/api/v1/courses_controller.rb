class Api::V1::CoursesController < ApplicationController
  def index
    @courses = Course.order("updated_at desc")

    render json: @courses
  end
  def create
    @course = Course.new(course_params)

    if @course .save
      render json: @course
    else
      render json: @course .errors
    end
  end
  protected
    def course_params
      params.require(:course).permit(:username, :category_id, :subcategory_id, :subsubcategory_id)
    end
end