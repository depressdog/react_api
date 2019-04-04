class CoursesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
  end
  def new
  end
  def edit
    @course = Course.find(params[:id])
  end
  def show
    @course = Course.find(params[:id])
  end
  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    redirect_to courses_path
  end
end
