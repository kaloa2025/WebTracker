module Api
    module V1
      class WebsiteActivitiesController < ApplicationController
        before_action :authenticate_user!
  
        def create
          website_activity = current_user.website_activities.build(website_activity_params)
          if website_activity.save
            render json: website_activity, status: :created
          else
            render json: { errors: website_activity.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        private
  
        def website_activity_params
          params.require(:website_activity).permit(:website_id, :start_time, :end_time)
        end
      end
    end
  end
  