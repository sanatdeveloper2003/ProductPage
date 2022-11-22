import {useProducts} from './hooks/products'
import {Product} from './components/Product'
import {Loader} from './components/loader'
import {Error} from './components/error' 
import {Modal} from './components/Modal'
import {CreateProduct} from './components/CreateProduct'

function App() {
  const {loading, products, error} = useProducts()

  return(
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader />}
      { error && <Error error = {error} /> }
      { products.map(product => <Product product={product} key={product.id} />) }

      <Modal title="Create new product">
        <CreateProduct />
      </Modal>

    </div>
  )
}

export default App;
