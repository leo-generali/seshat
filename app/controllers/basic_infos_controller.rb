class BasicInfosController < ApplicationController
  before_action :set_basic_info, only: [:show, :update, :destroy]

  # GET /basic_infos
  def index
    @basic_infos = BasicInfo.all

    render json: @basic_infos
  end

  # GET /basic_infos/1
  def show
    render json: @basic_info
  end

  # POST /basic_infos
  def create
    @basic_info = BasicInfo.new(basic_info_params)

    if @basic_info.save
      render json: @basic_info, status: :created, location: @basic_info
    else
      render json: @basic_info.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /basic_infos/1
  def update
    if @basic_info.update(basic_info_params)
      render json: @basic_info
    else
      render json: @basic_info.errors, status: :unprocessable_entity
    end
  end

  # DELETE /basic_infos/1
  def destroy
    @basic_info.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_basic_info
      @basic_info = BasicInfo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def basic_info_params
      params.require(:basic_info).permit(:first_name, :last_name, :email, :tel, :linkedin, :github, :website)
    end
end
