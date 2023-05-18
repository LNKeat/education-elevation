class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private


  def admin 
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user && @current_user.role == "admin"
  end

  def render_unprocessable_entity_response(object)
    render json: { errors: object.record.errors.full_messages }, status: :unprocessable_entity
end

end
