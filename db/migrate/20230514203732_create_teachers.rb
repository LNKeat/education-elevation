class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.integer :funds_needed
      t.integer :funds_raised

      t.timestamps
    end
  end
end
