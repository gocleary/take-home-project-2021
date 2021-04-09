module Api
  class UsersController < ApplicationController
    def index
      @users = User.all

      json = UserSerializer.new(@users).serializable_hash

      render json: json, status: :ok
    end
  end
end
