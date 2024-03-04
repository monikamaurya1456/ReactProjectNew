import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar DynmicMenuName="TextUtil(it is by props)" aboutTitle="About Us"></Navbar>
    
    {/* below line for type safe check sending number instead of string propsType */}
    {/* <Navbar DynmicMenuName="TextUtil(it is by props)" aboutTitle={3}></Navbar> */} 
    </>
  );


}


export default App;
