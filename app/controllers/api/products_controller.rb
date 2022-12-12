class Api::ProductsController < ApplicationController
    def index 
        @product = Product.all 
        render :index 
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

    def create 
        @product = Product.new(product_params)
        if @product.save 
        render :show
        else 
        render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = Product.find_by(id: params[:id])
        @product.destroy 
        render :show 
    end

    def update
        @product = Product.find(params[:id])
           
        if @product
          newOne = @product.update_attributes(product_params)
          render :show 
            
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

     private
    def product_params
        params.require(:product).permit(:name, :price, :quantity, :description, :image)
    end

end
