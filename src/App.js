import "./styles.css";
import Doctor from "./components/Doctor";
import { Container } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      <Container maxW="100%">
        <Doctor />
      </Container>
    </div>
  );
}
