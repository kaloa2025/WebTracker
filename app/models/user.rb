class User < ApplicationRecord
    has_many :websites
    has_many :website_activities
  end
  