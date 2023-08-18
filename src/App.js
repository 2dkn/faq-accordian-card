import accordion from "../src/components/accordion";
import faqs from "../src/components/faqs";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
