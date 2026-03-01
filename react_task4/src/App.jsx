import './App.css'
import Product from './Product'
import Product2 from './Product2'

function App() {

  return (
    <>
      <Product title="Laptop" price={1200} onSale={true} />
      <Product title="Phone" price={800} onSale={false} />
      <Product title="Headphones" price={200} onSale={true} />
      <Product2 />
    </>
  )
}

export default App
