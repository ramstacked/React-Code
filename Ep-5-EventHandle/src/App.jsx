import  Contend from "./Component/Contend";
import Footer from "./Component/Footer"
import Header from "./Component/Header"
 
function App() {
 
   let user="Ramkumar";
  return (
    <div className="app">
     
      <Header user={user}/>    
      <Contend />
      <Footer user="web developer"/>
    </div>  
     
  )
}

export default App
