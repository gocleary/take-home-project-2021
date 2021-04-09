class Question < ApplicationRecord
  belongs_to :creator, class_name: 'User', optional: false
  belongs_to :event

  has_many :answers, dependent: :destroy
end
