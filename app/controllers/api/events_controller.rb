module Api
  class EventsController < ApplicationController
    def show
      @event = Event.find(params[:id])

      json = EventSerializer.new(@event, include: [:creator]).serializable_hash

      render json: json, status: :ok
    end
  end
end
