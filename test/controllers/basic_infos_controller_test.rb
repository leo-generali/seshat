require 'test_helper'

class BasicInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @basic_info = basic_infos(:one)
  end

  test "should get index" do
    get basic_infos_url, as: :json
    assert_response :success
  end

  test "should create basic_info" do
    assert_difference('BasicInfo.count') do
      post basic_infos_url, params: { basic_info: { email: @basic_info.email, first_name: @basic_info.first_name, github: @basic_info.github, last_name: @basic_info.last_name, linkedin: @basic_info.linkedin, tel: @basic_info.tel, website: @basic_info.website } }, as: :json
    end

    assert_response 201
  end

  test "should show basic_info" do
    get basic_info_url(@basic_info), as: :json
    assert_response :success
  end

  test "should update basic_info" do
    patch basic_info_url(@basic_info), params: { basic_info: { email: @basic_info.email, first_name: @basic_info.first_name, github: @basic_info.github, last_name: @basic_info.last_name, linkedin: @basic_info.linkedin, tel: @basic_info.tel, website: @basic_info.website } }, as: :json
    assert_response 200
  end

  test "should destroy basic_info" do
    assert_difference('BasicInfo.count', -1) do
      delete basic_info_url(@basic_info), as: :json
    end

    assert_response 204
  end
end
