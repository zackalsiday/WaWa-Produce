json.key_format! camelize: :lower

@product.each do |product|
    json.set! product.id do
        json.partial! 'product', product: product
    end
end