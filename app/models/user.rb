# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :tracks

  has_many :likes
  has_many :liked_tracks,
    through: :likes,
    source: :track

  has_many :dislikes
  has_many :disliked_tracks,
    through: :dislikes,
    source: :track

  def self.search(queryValue)
    self.where("username ILIKE ?", "%#{queryValue}%").limit(5)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.password_is?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = self.class.generate_session_token
    end
  end


end
