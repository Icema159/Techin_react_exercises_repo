const Product = ({ title, price, onSale }) => {
    return (
        <div className="bg-green-300">
            <h2>{title}</h2>
            <p>{price}€</p>
            {onSale && <span className="text-red-800">SALE!</span>}
        </div>
    );
};

export default Product