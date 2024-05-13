class WebsiteSerializer < ActiveModel::Serializer
    attributes :id, :url, :user_id, :website_category_id
  end
  