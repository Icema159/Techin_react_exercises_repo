import { useState } from "react";

const Product = ({ title, price, onSale }) => {
    return (
        <div className="p-4 border rounded mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{price}€</p>

            {onSale && (
                <span className="text-red-600 font-semibold">SALE!</span>
            )}
        </div>
    );
};

function App() {
    const [products, setProducts] = useState([
        { id: 1, title: "Laptop", price: 1200, onSale: true },
        { id: 2, title: "Phone", price: 800, onSale: false },
        { id: 3, title: "Headphones", price: 200, onSale: true },
    ]);

    const toggleSale = (id) => {
        const updated = products.map((product) =>
            product.id === id
                ? { ...product, onSale: !product.onSale }
                : product
        );

        setProducts(updated);
    };

    return (
        <div className="p-8">
            {products.map((product) => (
                <div key={product.id}>
                    <Product
                        title={product.title}
                        price={product.price}
                        onSale={product.onSale}
                    />
                    <button
                        onClick={() => toggleSale(product.id)}
                        className="mb-6 px-4 py-1 bg-black text-white rounded"
                    >
                        Toggle Sale
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;