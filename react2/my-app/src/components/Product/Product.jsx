function Product() {
    const product = {
        name: 'Product',
        cost: 400,
        amout: 5,
    };

    return (
        <div>
            <h2>Product page</h2>
            <p>Name: {product.name}</p>
            <p>Cost: {product.cost}</p>
            <p>Amount: {product.amout}</p>
        </div>
    );
}
export default Product;