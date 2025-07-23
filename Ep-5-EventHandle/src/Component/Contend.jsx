import styled from 'styled-Components'
export const Contend = () => {
  let add={
    backgroundColor:"red",
    color:"white",
    boxShadow:"10px 10px 12px black,-10px -10px 12px gold"
  }
  let Button= styled.button
  `
   background-color:gold;
   color:black;
   width:100px;
   height:50px;
`
let Newbutton =styled(Button) // add the additional stylesheet for react components
`
box-shadow: 10px 10px 10px black;
 
`
let user="ramkumar"
function printsome(){      //e
  // console.log(e.target.innerText);
  user="kumar"
  console.log(user);
} 
function printsome1(){    //event
  // console.log(event.target.innerText);
  user="ramstracked"
   console.log(user );
}
 
  return (
    <main>
      <h1 style={add}>Main Contend -{user }</h1>
      <Button onClick={printsome}>Click me</Button>
      <Newbutton oncick={(e)=>{printsome1(e)}} >Duplicate Button</Newbutton>
      </main>
  );
};
export default Contend;