import "./app.css";
import Layout from "./components/Layout/Layout";

import 'regenerator-runtime/runtime'

function App(props) {
  const { wallet } = props;
  
  const mainObject = { wallet};

  return(
    <Layout mainObject={mainObject}/>
  );
}

export default App;