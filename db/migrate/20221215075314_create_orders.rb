class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :name, null: false 
      t.string :email, null: false 
      t.string :product_name, null: false 
      t.integer :product_id, null: false 
      t.integer :quantity, null: false 
      t.integer :total, null: false 
      t.timestamps
    end
  end
end
