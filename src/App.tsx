import { Alert } from "./pages/Alert";
import { Home } from "./pages/Home";
import { Disable } from "./pages/Disable";
import { New_Host } from "./pages/New_Host";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/alert" exact component={Alert}/>
      <Route path="/new_host" exact component={New_Host}/>
      <Route path="/disable" exact component={Disable}/>
    </BrowserRouter>
  );
}

export default App;