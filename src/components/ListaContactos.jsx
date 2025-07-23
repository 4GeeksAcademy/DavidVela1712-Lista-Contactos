import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import { getListaContactos } from "./listaComponentesApi";
import { useNavigate } from "react-router";

export const ListaContactos = () => {
  const [lista, setLista] = useState([]);
  const navegate = useNavigate();

  useEffect(() => {
    getListaContactos().then(listaApi => {
      setLista(listaApi)
    })
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-end pt-1">
            <Button onClick={() => navegate('/crearContacto')}>Añadir Contacto</Button>
          </Col>
        </Row>
        <Row>
          {
            lista.map(e => (
              <Col lg={12} key={e.id}>
                <p>{e.name}, {e.phone}, {e.email}, {e.address}</p>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
};