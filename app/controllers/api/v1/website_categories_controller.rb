module Api
    module V1
      class WebsiteCategoriesController < ApplicationController
        def index
          website_categories = WebsiteCategory.all
          render json: website_categories
        end
      end
    end
  end
  