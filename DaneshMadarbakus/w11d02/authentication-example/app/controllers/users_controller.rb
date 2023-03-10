class UsersController < ApplicationController
  def index
    @users = User.all
  end

  # Register form...
  def new
    @user = User.new
  end

  # Actually create a user...
  def create
    @user = User.new user_params
    if @user.save
      redirect_to users_path
    else
      redirect_to register_path, flash: 
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

end
