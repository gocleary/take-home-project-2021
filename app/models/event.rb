class Event < ApplicationRecord
  has_many :questions, dependent: :destroy
  belongs_to :creator, class_name: 'User', optional: false

  def display_path
    "/events/#{id}"
  end
end
