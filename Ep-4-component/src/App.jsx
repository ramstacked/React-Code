import  Contend   from "./Component/Contend";
import Footer from "./Component/Footer"
import Header from "./Component/Header"
 
function App() {
 
   let user="Ramkumar";
  return (
    <>
      <Header user={user}/>   
      <Footer user="web developer"/>
      <Contend />
    </>
  )
}

export default App
