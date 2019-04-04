class GendersController < ApplicationController
  def new
    @gender = Gender.new
    @genders = Gender.all
  end
  def create
    @gender = Gender.new(gender_params)
    if @gender.save
      redirect_to new_gender_path
    else
      redirect_to new_gender_path @gender.errors
    end
  end
  protected
    def gender_params
      params.require(:gender).permit(:name)
    end
end