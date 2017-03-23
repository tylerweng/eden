class Api::DislikesController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]
  # before_action :require_owner, only: [:destroy]

  def index
    @dislikes = Dislike.find_user_dislikes(params[:user_id])
    render :index
  end

  def create
    @dislike = current_user.dislikes.new(dislike_params)

    if @dislike.save
      render :show
    else
      render json: @dislike.errors.full_messages, status: 422
    end
  end

  def destroy
    @dislike = Dislike.find_by(id: params[:id])
    @dislike.destroy
    render :show
  end

  private

  def dislike_params
    params.require(:dislike).permit(:track_id)
  end

  # def require_owner
  #   forbidden unless current_user.dislikes.exists?(id: params[:id])
  # end
end
