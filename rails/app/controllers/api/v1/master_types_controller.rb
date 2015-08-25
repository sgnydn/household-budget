class Api::V1::MasterTypesController < Api::V1::BaseController
  before_filter :set_master_type, only: [:show, :update, :destroy]

  def index
    master_types = MasterType.all

    # default
    # render json: master_types

    # custom
    render(
        json: ActiveModel::ArraySerializer.new(
            master_types,
            each_serializer: Api::V1::MasterTypeSerializer,
            root: 'master_types'
        )
    )
  end

  def show
    render json: @master_type

  end

  private

  def set_master_type
    @master_type = MasterType.friendly.find(params[:id])
  end
end