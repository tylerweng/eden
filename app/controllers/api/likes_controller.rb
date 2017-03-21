class Api::LikesController < ApplicationController

  before_action :require_logged_in
  before_action :require_owner, only: [:destroy]

  def create
    @like = Like.new(user_id: current_user.id, track_id: like_params[:track_id])

    if @like.save
      render :create
    else 
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:track_id)
  end

  def require_owner
    forbidden unless current_user.likes.exists?(id: params[:id])
  end
end
