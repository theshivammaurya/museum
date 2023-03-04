import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";
import { v4 as uuidv4 } from 'uuid';

import { Link } from "react-router-dom";

const MY__ACCOUNT = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "My Wallet",
    url: "/wallet",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "/home",
  },
  {
    display: "Explore",
    url: "/home",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="5" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                  <i className=""></i>
                </span>
                IGNITUS NETWORKS
              </h2>
              <p>
              Our Company, Ignitus Networks, is developing a Platform to Buy, Auction and Sell Non Fungible Tokens (NFT), 
              using NEAR Blockchain.  
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={uuidv4()} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={uuidv4()} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Coming soon" />
            <div className="social__links d-flex gap-3 align-items-center ">

            </div>
          </Col>

          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {" "}
              BY IGNITUS NETWORKS, POWERED BY NEAR.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;