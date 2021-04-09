class PagesController < ApplicationController
  before_action :set_security_headers, only: [:home]

  def home
    @page_variables = {
      current_user: UserSerializer.new(current_user),
      logo: {},
      styles: {},
      app_name: 'Cleary',
      environment: Rails.env
    }
  end

  private

  def set_security_headers
    response.set_header('X-Frame-Options', 'SAMEORIGIN')
    response.set_header('Content-Security-Policy', "frame-ancestors 'none'")
  end
end
