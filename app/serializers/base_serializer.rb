module BaseSerializer
  extend ActiveSupport::Concern
  include JSONAPI::Serializer

  class_methods do
    def datetime_attribute(name)
      attribute name, &->(model) { model.send(name)&.iso8601 }
    end
  end
end
