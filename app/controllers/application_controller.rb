class ApplicationController < ActionController::Base
  def current_user
    User.find_by(email: 'pam@gocleary.com')
  end
end
