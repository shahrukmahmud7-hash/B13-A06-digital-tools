
import { useState } from 'react'
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
 const [activeTab , setActiveTab] = useState ("products") 
  // console.log(activeTab)

  const [carts , setCarts] = useState([])
    


  return (
    <>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
    <StatsSection></StatsSection>

      <div className='text-center mb-8'>
       <h1 className='text-[#101727] text-[48px] font-extrabold '
        >Premium Digital Tools</h1>
        <p className='text-[16px] text-[#627382] font-regular '>
        Choose from our curated collection of premium digital products designed <br></br>
        to boost your productivity and creativity.</p>
         </div> 


     <div className="tabs justify-center gap-4 bg-transparent mb-6 ">

      <input
       type="radio"
       name="my_tabs"
       className="tab rounded-full w-40 
      checked:bg-[#4F39F6] checked:text-white 
       bg-white text-black border transition"
      aria-label="Products"
       onClick={()=>setActiveTab("products")}
       defaultChecked
    />

      <input
       type="radio"
       name="my_tabs"
       className="tab rounded-full w-40
      checked:bg-[#4F39F6] checked:text-white 
      bg-white text-black border transition"
        aria-label={`Cart (${carts.length})`}
        onClick={()=>setActiveTab("cart")}
      />

    </div>
    {activeTab === "products" && <Main modelPromise={modelPromise}
    carts={carts} setCarts={setCarts}
    ></Main>}
    {activeTab === "cart" && <Cart
    carts={carts} setCarts={setCarts}
    ></Cart>}

     <Body></Body>
     <Pricing></Pricing>
     <Footer></Footer>
    

    </>
  )
}

export default App
