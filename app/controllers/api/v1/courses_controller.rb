class Api::V1::CoursesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    @courses = Course.order("updated_at desc")

    render json: @courses
  end
  def show
    @course = Course.find(params[:id])

    render json: @course
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
      params.require(:course).permit(:user_id, :username, :category_id,
                                     :subcategory_id, :subsubcategory_id,
                                     :phone, :email, :education, :age,
                                     :video_url, :price, :body)
    end
end