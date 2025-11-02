
import './App.scss'
import Cart from './components/cart'
import Grid from './components/grid'
import {MyCartProvider} from "../context/cartContext"
function App() {


  return (
    <div className="">
      <MyCartProvider>

      <div className="main_container">

        <section className='grid_section'>
          <h1 className=''>Desert</h1>
          
          <Grid/>

        </section>

        <section className='cart_section'>
          <Cart/>
        </section>

      </div>
      </MyCartProvider>
    </div>
  )
}

export default App
