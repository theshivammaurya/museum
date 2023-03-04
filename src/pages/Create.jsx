import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import PreviewMint from "../components/ui/Preview-mint/PreviewMint";
import placeholder from "../assets/images/placeholder.jpg";
import "../styles/create-item.css";
import { Button } from "react-bootstrap";


const Create = (props) => {
  const { mainObject } = props;
  const creator = mainObject.accountId;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [src, setSrc] = useState(placeholder);




  return (
    <>
      <CommonSection title="Create Item" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <PreviewMint item={{ title, desc, src, creator }} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input
                      type="file"
                      className="upload__input"
                      required
                    />

                    <div className="form__input">
                      <label htmlFor="">Title</label>
                      <input
                        type="text"
                        placeholder="Enter title"
                        required
                      />
                    </div>
                    <div className="form__input">
                      <label htmlFor="">Description</label>
                      <textarea
                        name=""
                        id=""
                        rows="7"
                        placeholder="Enter description"
                        className="w-100"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <Button type="submit">
                    Mint
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
