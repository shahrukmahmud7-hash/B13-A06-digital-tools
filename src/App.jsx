
import './App.css'
import Banner from './components/banner/Banner'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import Cart from './components/main/Cart'
import Main from './components/main/Main'
import NavBar from './components/navbar/NavBar'
import Pricing from './components/pricing/Pricing'
import StatsSection from './components/statsSection/StatsSection'
 
   const getModals = async() => {
    const res = await fetch ("/model.json")
    return res.json()
   }

   const modelPromise = getModals()

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
    <StatsSection></StatsSection>
     <Main modelPromise={modelPromise}></Main>
     <Cart></Cart>
     <Body></Body>
     <Pricing></Pricing>
     <Footer></Footer>
    

    </>
  )
}

export default App
