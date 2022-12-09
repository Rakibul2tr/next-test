
import Carousel from '../Components/Carousel'
import Navbar from '../Components/Navbar'
import Category from './categorys'


export default function Home() {

  return (
    <>
      <Navbar/>
      <Carousel/>
      <div className='container mt-3'>
        <div className='row'>
          <Category />
        </div>
      </div>
    </>
    
  )
}
