class WebsiteActivity < ApplicationRecord
    belongs_to :user
    belongs_to :website
  end
  