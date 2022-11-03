import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from "../styles/Home.module.css";

import { Row, Col, Button, Container } from "react-bootstrap";
import { useEffect } from "react";
import aos from "aos";
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
                  data-aos-duration="1000"
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
              <div>
                <h3 data-aos="fade-right" data-aos-duration={1000}>
                  Virtual Cards
                </h3>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Use our virtual cards to handle subscriptions, make online
                  purchases
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h3 data-aos="fade-right" data-aos-duration={1000}>
                  Pay bills
                </h3>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Hate queuing? Pay your bills from the app.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h3 data-aos="fade-left" data-aos-duration={1000}>
                  Send Money
                </h3>
                <p data-aos="fade-right" data-aos-duration={1000}>
                  Send money to your acquaintances anywhere in the world
                </p>
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
    </div>
  );
}
