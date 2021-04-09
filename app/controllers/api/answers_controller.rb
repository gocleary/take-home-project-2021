module Api
  class AnswersController < ApplicationController
    def create
      @question = Question.find(params[:question_id])

      @answer = @question.answers.create!(answer_params.merge(creator: current_user))

      @question.reload

      render_answer_json
    end

    private

    def render_answer_json
      json = AnswerSerializer.new(@answer, include: [:creator, :question]).serializable_hash

      render json: json, status: :ok
    end

    def answer_params
      params.require(:answer).permit(:content)
    end
  end
end
