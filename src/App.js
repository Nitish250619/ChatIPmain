import "./App.css";
import Routings from "./Components/Routings/Routings";
import { MessageProvider } from "./Context/MessageContext";

function App() {
  return (
    <div className="App">
      <MessageProvider>
        <Routings />
      </MessageProvider>
    </div>
  );
}

export default App;
