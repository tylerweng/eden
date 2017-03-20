class Api::TracksController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destroy]
  before_action :require_owner, only: [:update, :destroy]

  def index
    if logged_in?
      @tracks = Track.where(user_id: params[:user_id])
      render :index
    else
      @tracks = Track.all
      render :index
    end
  end

  def create
    @track = current_user.tracks.new(track_params)

    if @track.save
      render :create
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :artist, :track_url, :img_url)
  end
end
