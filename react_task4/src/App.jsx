import './App.css'
import Product from './Product'


function App() {

  return (
    <>
      <Product title="Laptop" price={1200} onSale={true} />
      <Product title="Phone" price={800} onSale={false} />
      <Product title="Headphones" price={200} onSale={true} />
    </>
  )
}

export default App
