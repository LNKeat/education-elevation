class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :funds_needed, :funds_raised
  has_one :teacher
end
