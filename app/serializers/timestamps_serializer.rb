module TimestampsSerializer
  extend ActiveSupport::Concern
  include BaseSerializer

  included do
    datetime_attribute :created_at
    datetime_attribute :updated_at
  end
end
