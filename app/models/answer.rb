class Answer < ApplicationRecord
  belongs_to :creator, class_name: 'User', optional: false
  belongs_to :question
end
