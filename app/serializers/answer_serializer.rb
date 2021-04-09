class AnswerSerializer
  include TimestampsSerializer

  attributes :content

  belongs_to :question
  belongs_to :creator, id_method_name: :creator_id, record_type: :user, serializer: UserSerializer
end
