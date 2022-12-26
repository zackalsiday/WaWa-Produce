class Api::OrdersController < ApplicationController
    def index 
        @order = Order.all
        render :index
    end

    def show
        @order = Order.find(params[:id])
        render :show
    end

    def create
        @order = Order.new(order_params)
        if @order.save 
            render :show 
        else 
            render json: @order.errors.full_messages, status: 422 
        end
    end

    def destroy
        @order = Order.find_by(id: params[:id])
        @order.destroy 
        render :show
    end
    
    def update
        @order = Order.find(params[:id])
        if @order 
            newOne = @order.update_attributes(order_params)
            render :show
        else
            render json: @order.errors.full_messages, status: 422
        end
    end

    private 

    def order_params
        params.require(:order).permit(:name, :email, :product_name, :product_id, :quantity, :total, :address, :phone)
    end
end
