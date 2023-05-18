class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def authorize
    @current_user = Camper.find_by(id: session[:camper_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def admin 
    @current_user = Camper.find_by(id: session[:camper_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user && @current_user.is_admin
  end

  def render_unprocessable_entity_response(object)
    render json: { errors: object.record.errors.full_messages }, status: :unprocessable_entity
end

end
