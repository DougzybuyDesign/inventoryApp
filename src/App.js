
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from "./components/funcComponet";

export default function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1> Product Inventory Form React js</h1>
        <AddProduct/>
        </header>
      </div>
  );
}
