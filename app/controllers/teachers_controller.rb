class TeachersController < ApplicationController

    def index 
        teachers = Teacher.all
        render json: teachers
    end

    def create 
        teacher = Teacher.create!(teacher_params)
        render json: teacher
    end


    private

    def teacher_params 
        params.permit(:first_name, :last_name, :bio, :funds_raised, :funds_needed)
    end
end
