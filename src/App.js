

 import { useState } from 'react';
import './style.css'
function App() {
  const [state,setState] = useState(0);

  return (
    <div className="App">

    




      <h1>{state}</h1>
      <button onClick={()=>{
            if(state <  15){
              setState(state + 1)
         }  
      }}>+</button>
      <button onClick={()=>{
          if(state >= 1 ){
           setState(state - 1)
          }
      }}>-</button> 
       <button onClick={()=>{
        if(state <  15){
             setState(state + 5)
        }  
      }}>+5</button> 
       <button onClick={()=>{
     if(state >= 1 ){
      setState(state - 5)
     }
        
      }}>-5</button> 


      
    

 
    
    </div>
  );
}

export default App;

