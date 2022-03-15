class PlantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
      plants = Plant.all
      render json: plants.to_json(include: :updates)
    end
    def show
        plants = find_plants
        render json: plants.to_json(include: :updates)
    end
    def create
        plants = Plant.create(patch_params)
        render json: plants, status: :created
    end
    def update
        @plants = find_plants
        @plants.update(patch_params)
        render json: @plants, status: :ok
    end
    def destroy
        plants = find_plants
        plant_id = plants.id
        plants.destroy!
        render json: plant_id
    end
    

    private
    def find_plants
        Plant.find_by(id: params[:id])
    end
    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end
    def patch_params
        params.permit(:name,:plant_type_id,:age,:user_id)
    end
end
