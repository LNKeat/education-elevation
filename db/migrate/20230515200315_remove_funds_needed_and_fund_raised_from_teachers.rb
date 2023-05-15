class RemoveFundsNeededAndFundRaisedFromTeachers < ActiveRecord::Migration[6.1]
  def change
    remove_columns :teachers, :funds_needed, :funds_raised
  end
end
