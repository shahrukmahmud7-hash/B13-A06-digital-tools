
import './App.css'
import Banner from './components/banner/Banner'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Pricing from './components/pricing/Pricing'
import StatsSection from './components/statsSection/StatsSection'


function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatsSection></StatsSection>
     <Body></Body>
     <Pricing></Pricing>
     <Footer></Footer>
    

    </>
  )
}

export default App
