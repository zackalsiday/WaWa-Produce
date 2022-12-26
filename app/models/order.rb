class Order < ApplicationRecord
    validates :name, presence: true 
    validates :email, presence: true 
    validates :product_name, presence: true
    validates :product_id, presence: true
    validates :quantity, presence: true 
    validates :total, presence: true 
    validates :phone, presence: true 
    validates :address, presence: true 
end
