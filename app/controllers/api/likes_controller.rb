class Api::LikesController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]
  # before_action :require_owner, only: [:destroy]

  def index
    @likes = Like.find_user_likes(params[:user_id])
    render :index
  end



  def create
    @like = current_user.likes.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    @like.destroy
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:track_id)
  end

  # def require_owner
  #   forbidden unless current_user.likes.exists?(id: params[:id])
  # end
end
