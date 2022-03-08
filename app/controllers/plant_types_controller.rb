class PlantTypesController < ApplicationController
    def index
        plants = PlantType.all
        render json: plants
      end
      def show
          plants = find_plant_types
          render json: plants, status: :ok
      end
      def create
        plants = PlantType.create!(plant_type_params)
        render json: services, status: :created
    end
      private
      def find_plant_types
        PlantType.find_by(id: params[:id])
    end
    def plant_type_params
        params.permit(:name,:image,:description,:nursery_picture)
    end
end
