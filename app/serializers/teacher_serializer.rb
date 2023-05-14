class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :funds_needed, :funds_raised
end
