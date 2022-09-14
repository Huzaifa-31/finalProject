import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const carpost = () => {
  // const [car_make, setCar_make] = useState("");
  // const [car_modal, setCar_modal] = useState("");
  // const [car_varient, setcar_Varient] = useState("");
  // const [fule_avg, setFule_avg] = useState("");
  // const [seats, setSeats] = useState("");
  // const [bags, setBags] = useState("");
  // const [body_type, setBody_type] = useState("");
  // const [color, setColor] = useState("");
  // const [engine_type, setEngine_type] = useState("");
  // const [transmission, setTransmission] = useState("");
  // const [car_image, setCar_image] = useState("");
  // const [discription, setDiscription] = useState("");
  // const [rent_price, setRent_price] = useState("");

  return (
    <>
      <Container className="bg-dark pt-2 pb-4 mt-4">
        <div className="main container">
          <div className="car_info">
            <Form className="bg-light p-4 mt-4">
              <Row>
                <Col>
                  <h1>Car Information</h1>
                </Col>
                <Col className="">
                  <Button>update</Button>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group as={Col}>
                    <Form.Label
                      controlId="floatingInput"
                      label=" "
                      className="mb-3 "
                    ></Form.Label>
                    <Form.Control
                      type="file"
                      className="mb-3"
                      accept="image/*"
                    />
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Car Price"
                      className="mb-3"
                    >
                      <Form.Control type="number" placeholder=" " />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Car Make"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder=" " />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Car Model"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder=" " />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Car Varient"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder=" " />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="post_stuc">
            <Form>
              <Col className="bg-light p-4 mt-4">
                <Row>
                  <Col>
                    <h1>Car Details</h1>
                  </Col>
                  <Col className="">
                    <Button>update</Button>
                  </Col>
                </Row>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Car Fuel Avg"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder=" " />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Car Body Type"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder=" " />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Number of Car Seats"
                  className="mb-3"
                >
                  <Form.Control type="number" placeholder=" " />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Number of Car Bags"
                  className="mb-3"
                >
                  <Form.Control type="number" placeholder=" " />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Car Color"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder=" " />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Engine Type"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder=" " />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Transmission Type"
                  className="mb-3"
                >
                  <Form.Select aria-label="select Transmission">
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col className="bg-light p-4 mt-4">
                <h1>Description</h1>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Transmission Type"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="enter a discription"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Col>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default carpost;
