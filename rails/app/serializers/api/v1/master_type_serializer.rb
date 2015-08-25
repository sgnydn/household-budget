class Api::V1::MasterTypeSerializer < Api::V1::BaseSerializer
  attributes :id, :m_type_name, :m_type_code, :created_at, :updated_at, :slug
  # def id
  #   object.slug
  # end
end
