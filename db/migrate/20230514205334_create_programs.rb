class CreatePrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :programs do |t|
      t.string :name
      t.text :description
      t.belongs_to :teacher, null: false, foreign_key: true
      t.integer :funds_needed
      t.integer :funds_raised

      t.timestamps
    end
  end
end
