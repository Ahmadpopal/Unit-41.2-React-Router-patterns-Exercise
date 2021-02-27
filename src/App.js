import {BrowserRouter, Link, Route } from "react-router-dom";
import DogRoutes from './DogFinder/Routes'
import Routes from './ColorFactory/Routes'



function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>      
      <DogRoutes />
   </BrowserRouter> */}
<Routes />
    </div>
  );
}



export default App;
