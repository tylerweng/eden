class Api::LikesController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]
  before_action :require_owner, only: [:destroy]

  def index
    @likes = Like.find_user_likes(params[:user_id])
    render :index
  end

  def create
    @like = current_user.likes.new(like_params)

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
