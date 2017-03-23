class Api::TracksController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destroy]
  before_action :require_owner, only: [:update, :destroy]

  def index
    if params[:selectedTrack]
       selectedTrack = {
        track: {
          id: params[:selectedTrack][:id],
          title: params[:selectedTrack][:title],
          artist: params[:selectedTrack][:artist],
          track_url: params[:selectedTrack][:track_url],
          img_url: params[:selectedTrack][:img_url],
          description: params[:selectedTrack][:description],
          user: params[:selectedTrack][:user]
        }
      }
      @track = Track.find_next_track(selectedTrack)
      render :show
    elsif logged_in?
      @tracks = Track.where(user_id: params[:user_id])
      render :index
    else
      num_tracks = (params[:num_tracks] ? params[:num_tracks] : 20)
      @tracks = Track.top(num_tracks)
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
    if (params[:retrieveLikeStatus])
      @track = Track.find_by(id: params[:id])
      like_status = 'neutral'

      @track.likes do |like|
        like_status = 'liked' if like.track_id == @track.id && like.user_id == current_user.id
      end

      @track.dislikes do |dislike|
        like_status = 'disliked' if dislike.track_id == @track.id && dislike.user_id == current_user.id
      end

      render json: [like_status]
    else
      @track = Track.find_by(id: params[:id])
      render :show
    end
  end

  def update
  end

  def destroy
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :artist, :track_url, :img_url)
  end

  def require_owner
  end

end
