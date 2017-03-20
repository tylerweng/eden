class Api::SearchesController < ApplicationController

  def show
    @users = User.search(params[:q])
    @tracks = Track.search(params[:q])

    render :show
  end

end
