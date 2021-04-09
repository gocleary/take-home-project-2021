module Api
  class QuestionsController < ApplicationController
    before_action :set_question, only: [:show]

    def index
      @event = Event.find(params[:event_id])
      @questions = @event.questions.includes(:creator).order(:created_at)

      json = QuestionSerializer.new(@questions, include: [:creator]).serializable_hash

      render json: json, status: :ok
    end

    def show
      render_question_json
    end

    private

    def set_question
      @question = Question.includes(:creator, answers: [:creator]).find(params[:id])
    end

    def render_question_json
      json = QuestionSerializer.new(
        @question,
        params: { optional_relationships: [:answers] },
        include: [:event, :creator, :'answers.creator']
      ).serializable_hash

      render json: json, status: :ok
    end
  end
end
