class Api::TracksController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destroy]

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
    elsif params[:similarTrack]
      similarTrack = {
        track: {
          id: params[:similarTrack][:id],
          title: params[:similarTrack][:title],
          artist: params[:similarTrack][:artist],
          track_url: params[:similarTrack][:track_url],
          img_url: params[:similarTrack][:img_url],
          description: params[:similarTrack][:description],
          user: params[:similarTrack][:user]
        }
      }
      @tracks = Track.find_similar_tracks(similarTrack)
      render :index
    elsif params[:num_tracks]
      num_tracks = (params[:num_tracks] ? params[:num_tracks] : 10)
      @tracks = Track.top(num_tracks)
      render :index
    elsif params[:user_id]
      @tracks = Track.where(user_id: params[:user_id])
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
    if (params[:retrieveLikeStatus] && current_user)
      @track = Track.find_by(id: params[:id])
      return unless @track
      like_status = 'neutral'
      like_status = 'liked' if current_user.likes.find_by(track_id: @track.id)
      like_status = 'disliked' if current_user.dislikes.find_by(track_id: @track.id)
      render json: [like_status]
    else
      return unless params[:id]
      @track = Track.find_by(id: params[:id])
      return unless @track
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


end
