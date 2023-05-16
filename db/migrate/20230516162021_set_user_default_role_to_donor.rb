class SetUserDefaultRoleToDonor < ActiveRecord::Migration[6.1]
  def change
    change_column_default :users, :role, "donor"
  end
end
