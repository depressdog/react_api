require 'test_helper'

class GenderControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get gender_new_url
    assert_response :success
  end

end
