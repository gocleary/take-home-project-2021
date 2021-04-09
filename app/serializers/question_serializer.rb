class QuestionSerializer
  include TimestampsSerializer

  attributes :content

  belongs_to :creator, id_method_name: :creator_id, record_type: :user, serializer: UserSerializer
  belongs_to :event

  has_many :answers
end
