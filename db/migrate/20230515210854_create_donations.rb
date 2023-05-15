class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.integer :amount
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :program, null: false, foreign_key: true

      t.timestamps
    end
  end
end
