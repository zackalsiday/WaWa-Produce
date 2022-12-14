export const fetchProducts = () =>
    $.ajax({
        method: "GET",
        url: "/api/products",
    });

export const fetchProduct = (productId) => {
    return $.ajax({
        method: "GET",
        url: `/api/products/${productId}`,
    });
};

export const createProduct = (product) =>
    $.ajax({
        method: "POST",
        url: `/api/products/`,
        data: { product },
    });
export const updateProduct = (product) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/products/${product.id}`,
        data: { product },
    });
};

export const deleteProduct = (productId) =>
    $.ajax({
        method: "DELETE",
        url: `/api/products/${productId}`,
    });