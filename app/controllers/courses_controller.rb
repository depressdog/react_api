class CoursesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
  end
  def new
  end
  def show
    @course = Course.find(params[:id])
  end
end
