class CoursesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
  end
  def new
  end
  def edit
    @course = Course.find(params[:id])
  end
  def update
    @course = Course.find(params[:id])
      if @course.update_attributes(course_params)
        redirect_to @course
      else
        render :edit
      end
  end
  # def update
  #   @course = Course.find(params[:id])
  #   if @course.update_attributes(course_params)
  #     redirect_to @course
  #   else
  #     render :edit
  # end
  def show
    @course = Course.find(params[:id])
  end
  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    redirect_to courses_path
  end

  private
    def course_params
      params.require(:course).permit(:category_id,
                                     :subcategory_id, :subsubcategory_id, :username, :phone, :email, :price, :education, :age, :body, :video_url, :image1, :image2, :image3, :image4, :image5, :image6, :image7, :image8, :image9, :image10)
    end
end
