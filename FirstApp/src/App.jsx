import Home from "./assets/Home";
import Homeclass from "./Homeclass";

import Count from "./assets/Count";


function App(params) {

    let  fname = "Abinash";

   return (
    <>
     <h1>Welcome to react</h1>
     <p>Hello how are you</p>
     <Home name = {fname} />
     <Homeclass/>
     <Count/>
    
    
    </>
   
    
)
}

export default App;