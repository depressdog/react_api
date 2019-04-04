require 'test_helper'

class GendersControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get genders_new_url
    assert_response :success
  end

end
