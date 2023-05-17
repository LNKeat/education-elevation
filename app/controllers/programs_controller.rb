class ProgramsController < ApplicationController
    def index 
        programs = Program.all 
        render json: programs
    end

    def create
        program = Program.create!(params_permit)
        render json: program, status: :created
    end

    def update
        program = Program.find_by(id: params[:id])
        program.update!(params_permit)
        render json: program, status: 200
    end

    def destroy
        program = Program.find(params[:id])
        program.destroy
        head :no_content
    end

    private

    def params_permit
        params.permit(:name, :description, :teacher_id, :funds_needed, :funds_raised)
    end
end
