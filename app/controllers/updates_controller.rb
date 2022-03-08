class UpdatesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
      updates = Update.all
      render json: updates 
    end
    def show
        updates = find_updates
        render json: updates, status: :ok
    end
    def create(params)
        updates = find_updates
        updates.create!(params)
        render json: updates, status: :created
    end
    def updated
        updates = find_updates
        updates.update!(params)
        render json: updates, status: :accepted
    end
    def delete
        updates = find_updates
        if updates
            updates.destroy!
        render json: {}
        end
    end
    private
    def find_updates
        Update.find_by(id: params[:id])
    end
    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end
    def patch_params
        params.permit(:status,:comment,:user_id,:plant_id)
    end
end
