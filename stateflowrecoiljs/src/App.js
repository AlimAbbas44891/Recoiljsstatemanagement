import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form/Form";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );
}

export default App;
