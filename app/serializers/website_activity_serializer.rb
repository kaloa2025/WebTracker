class WebsiteActivitySerializer < ActiveModel::Serializer
    attributes :id, :website_id, :user_id, :start_time, :end_time
  end
  