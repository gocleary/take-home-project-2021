class EventSerializer
  include TimestampsSerializer

  attributes :title, :display_path

  belongs_to :creator, id_method_name: :creator_id, record_type: :user, serializer: ::UserSerializer

  has_many :questions, record_type: :question, serializer: :question
end
