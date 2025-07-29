import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { deleteContacto, getListaContactos } from "./listaComponentesApi";
import { useNavigate } from "react-router";

export const ListaContactos = () => {
  const [lista, setLista] = useState([]);
  const navegate = useNavigate();

  const eliminarContacto = (id) => {
    deleteContacto(id).then(listaApi => {
      setLista(listaApi)
    })
  }

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
        <Row className="mt-3">
          {
            lista.length === 0 ? (
              <Col lg={12}>
                <p>No hay contactos</p>
              </Col>
            ) : (
              lista.map(e => (
                <Col lg={12} key={e.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                      <Card.Text>
                        {e.phone}<br/>
                        {e.email}<br/>
                        {e.address}
                      </Card.Text>
                      <div>
                        <Button variant="danger" onClick={() => eliminarContacto(e.id)}>Eliminar</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )
          }
        </Row>
      </Container>
    </>
  );
};