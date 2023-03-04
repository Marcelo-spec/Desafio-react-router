import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="text-center fw-bold"> Cuentanos, ¿En que te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};
