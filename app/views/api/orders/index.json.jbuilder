json.key_format! camelize: :lower

@order.each do |order|
    json.set! order.id do
        json.partial! 'order', order: order
    end
end