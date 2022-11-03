import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from "../styles/Home.module.css";

import { Row, Col, Button, Container } from "react-bootstrap";
const team = [
  {
    name: "Joseph Agere",
    school: "",
    image: "/joseph.png",
    role: "Artificial Intelligence Researcher",
  },
  {
    name: "Fiifi Amoah",
    school: "UMaT",
    image: "/fiifi.png",
    role: "Blockchain Researcher",
  },
  {
    name: "Daisy Mensah",
    school: "UMaT",
    image: "/daisy.png",
    role: "Security Analyst",
  },
  {
    name: "Dela Eyram Kuwornu",
    school: "UMaT",
    image: "/dela.png",
    role: "AI Engineer",
  },
  {
    name: "John Barnes Oduro Twumasi",
    school: "UMaT",
    image: "/barnes.png",
    role: "Fullstack Engineer",
  },
];
export default function Home() {
  return (
    <div>
      <Head>
        <title>GoCash</title>
        <meta name="description" content="Transactions made easy." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <section
        className={`d-flex position-relative align-items-center ${styles.main}`}
        style={{
          minHeight: "100vh",
        }}
      >
        <svg
          className="position-absolute"
          style={{ left: "2rem", bottom: "1rem" }}
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14.6168"
            cy="14.7334"
            r="14"
            fill="url(#paint0_linear_115_36)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_36"
              x1="3.72793"
              y1="3.23717"
              x2="25.1045"
              y2="27.6712"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E4C5FD" />
              <stop offset="1" stop-color="#BB29EE" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="position-absolute"
          style={{ right: "3rem", top: "10rem" }}
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14.6168"
            cy="14.7334"
            r="14"
            fill="url(#paint0_linear_115_36)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_36"
              x1="3.72793"
              y1="3.23717"
              x2="25.1045"
              y2="27.6712"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E4C5FD" />
              <stop offset="1" stop-color="#BB29EE" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="position-absolute"
          style={{ right: "40%", bottom: "15%" }}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15.6167"
            cy="15.7334"
            r="15"
            fill="url(#paint0_linear_115_39)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_39"
              x1="3.1167"
              y1="2.58267"
              x2="26.8093"
              y2="29.6639"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FBBE9C" />
              <stop offset="1" stop-color="#EC8220" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="position-absolute"
          style={{ right: "20%", top: "15%" }}
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.6168 0.733398L32.3691 18.9811L50.6168 25.7334L32.3691 32.4857L25.6168 50.7334L18.8646 32.4857L0.616821 25.7334L18.8646 18.9811L25.6168 0.733398Z"
            fill="url(#paint0_linear_115_38)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_38"
              x1="8.95015"
              y1="4.90007"
              x2="42.2835"
              y2="46.5667"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E5C5FF" />
              <stop offset="1" stop-color="#A532FF" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="position-absolute"
          style={{ right: "2rem", bottom: "10rem" }}
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14.6168"
            cy="14.7334"
            r="14"
            fill="url(#paint0_linear_115_36)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_36"
              x1="3.72793"
              y1="3.23717"
              x2="25.1045"
              y2="27.6712"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E4C5FD" />
              <stop offset="1" stop-color="#BB29EE" />
            </linearGradient>
          </defs>
        </svg>
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div className={styles.maintext}>
                <h1 data-aos="fade-right" data-aos-duration={1000}>
                  Transactions made easy with
                  <span className={styles.text}>&nbsp;GoCash</span>
                </h1>
                <p
                  className="mb-4"
                  data-aos="flip-left"
                  data-aos-duration={1000}
                >
                  Send money, pay bills, handle subscriptions all in one app.
                </p>
                <div
                  className="d-flex justify-content-start gap-3"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc1af3Ptztn_SohZVoEeMx94kvA0N0ASyCVmNigz8GWJZrofQ/viewform"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button className="primary-button">
                      Join our Waitlist
                    </Button>
                  </a>
                  <a
                    href="https://expo.dev/@dishplug/vertex?serviceType=classic&distribution=expo-go"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button className="light-button">Take a sneakpeak</Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center  justify-content-center pt-5 no-scroll"
            >
              <Image
                src="/mockup.png"
                alt="mockup"
                className={styles.mainImg}
                style={{ objectFit: "contain", transform: "rotate(-25deg)" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="d-flex align-items-center py-5">
        <Container>
          <Row className="text-center pt-5">
            <Col md={4}>
              <div
                data-aos="fade-right"
                data-aos-duration={1000}
                data-aos-delay={1000}
              >
                <h3>Virtual Cards</h3>
                <p>
                  Use our virtual cards to handle subscriptions, make online
                  purchases
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-delay={2000}
              >
                <h3>Pay bills</h3>
                <p>Hate queuing? Pay your bills from the app.</p>
              </div>
            </Col>
            <Col md={4}>
              <div
                data-aos="fade-right"
                data-aos-duration={1000}
                data-aos-delay={3000}
              >
                <h3>Send Money</h3>
                <p>Send money to your acquaintances anywhere in the world</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="d-flex align-items-center pb-5">
        <Container>
          <Row className="text-center">
            <Col md={6} className="no-scroll">
              <Image
                src="/card.png"
                alt="mockup"
                data-aos="fade-right"
                data-aos-duration={1000}
                className={styles.mainImg}
                style={{ objectFit: "contain", transform: "rotate(25deg)" }}
              />
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center pt-5"
            >
              <div>
                <h2
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  className="mb-4"
                >
                  Get notified when we launch.
                </h2>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc1af3Ptztn_SohZVoEeMx94kvA0N0ASyCVmNigz8GWJZrofQ/viewform"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button className="primary-button">
                      Join our Waitlist
                    </Button>
                  </a>
                  <a
                    href="https://expo.dev/@dishplug/vertex?serviceType=classic&distribution=expo-go"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button className="light-button">Take a sneakpeak</Button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={`d-flex align-items-center py-5 ${styles.download} position-relative`}
      >
        <Image src="/light.png" className={styles.light} alt="" />
        <Container>
          <Row className="text-center">
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center pt-5 text-light"
            >
              <div data-aos="fade-left" data-aos-duration={1000}>
                <h2 className="mb-4 font-weight-bold">
                  Coming to the app stores
                </h2>
                <div
                  className="d-flex justify-content-center gap-3 position-relative"
                  style={{ zIndex: 4 }}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc1af3Ptztn_SohZVoEeMx94kvA0N0ASyCVmNigz8GWJZrofQ/viewform"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button className="light-button">Join our Waitlist</Button>
                  </a>
                  <a
                    href="https://expo.dev/@dishplug/vertex?serviceType=classic&distribution=expo-go"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button className="primary-button">Take a sneakpeak</Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="mt-4 position-relative "
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div className="d-flex  align-items-center justify-content-center">
                <Image
                  src="/mockup.png"
                  alt="mockup"
                  height={350}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/card.png"
                  alt="mockup"
                  height={200}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.team}>
        <h1 className="text-center">Our Team</h1>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <p>
                Team vertex consists of <small>(From left to right)</small>
                <ul>
                  <li>Joseph Agere</li>
                  <li>Daisy Mensah</li>
                  <li>Fiifi Amoah</li>
                  <li>Dela Eyram Kuwornu</li>
                  <li>
                    John Barnes Oduro Twumasi <small>Not in this picture</small>
                  </li>
                </ul>
              </p>
            </Col>
            <Col md={6}>
              <Image src="/team.jpeg" alt="team-vertex" fluid />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
