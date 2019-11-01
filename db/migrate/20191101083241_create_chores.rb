class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.references :user
      t.string :title, null: false
      t.integer :amount, null: false
      t.boolean :completed, null: false

      t.timestamps
    end
  end
end
