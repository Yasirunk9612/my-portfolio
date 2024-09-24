import { Container, Row, Col } from "react-bootstrap";
import logo from "../assest/img/yk-2.png";
import navIcon1 from "../assest/img/nav-icon1.svg";
import navIcon2 from "../assest/img/nav-icon2.svg";
import navIcon3 from "../assest/img/nav-icon3.svg";
import navIcon4 from "/Users/yasirunisal/Desktop/portfolio /portfolio-app/src/assest/img/github-mark.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/yasiru-nisal/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.facebook.com/yasiru.nisal.98"><img src={navIcon2} alt="FaceBook" /></a>
                <a href="https://www.instagram.com/yasiru_nisal__/"><img src={navIcon3} alt="Instergram" /></a>
                <a href="https://github.com/Yasirunk9612"><img src={navIcon4} alt="GitHub" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved || Yasiru Nisal</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}