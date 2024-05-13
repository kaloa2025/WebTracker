class Website < ApplicationRecord
    belongs_to :user
    belongs_to :website_category
    has_many :website_activities
  end
  