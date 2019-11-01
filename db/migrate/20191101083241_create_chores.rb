class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.references :user
      t.string :title
      t.integer :amount
      t.boolean :completed

      t.timestamps
    end
  end
end
