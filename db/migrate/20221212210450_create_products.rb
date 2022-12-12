class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false 
      t.string :price, null: false 
      t.integer :quantity, null: false 
      t.text :description, null: false 
      t.string :image
      t.timestamps
    end
  end
end
