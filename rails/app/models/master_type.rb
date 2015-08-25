class MasterType < ActiveRecord::Base
  extend FriendlyId
  friendly_id :m_type_name, use: :slugged
end
