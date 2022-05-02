import './App.css';
import {useState} from "react";
import {Header, HowItWorks} from "./components";
import {Main} from "./components";



/*export function App() {
    const [name, setName] = usete("приветик :)")
  return (
      <div className='App'>
          <div className='Header' onClick={() => {
              setName("у тебя будет ребенок!!!!!!!!!!!")
          }}>
              {name}
          </div>
      </div>
  );
}*/

export function App() {

    return(

                 <div>
                     <Header />
                     <Main />
                     <HowItWorks/>
                 </div>




    )
}