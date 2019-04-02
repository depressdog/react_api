class CoursesController < ApplicationController
  def index
  end
  def new
  end
  def show
    @course = Course.find(params[:id])
  end
end
