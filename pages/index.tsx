import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import cashout from "../public/cashout.png";
import mockup from "../public/mockup.png";
import { Row, Col, Button, Container } from "react-bootstrap";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={`d-flex align-items-center ${styles.main}`}
        style={{
          minHeight: "100vh",
        }}
      >
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h1>Make transactions with ease</h1>
                <p className="mb-4">
                  Send money, pay bills, handle subscriptions all in one app
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc1af3Ptztn_SohZVoEeMx94kvA0N0ASyCVmNigz8GWJZrofQ/viewform"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button className="primary-button">Join our Waitlist</Button>
                </a>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center pt-5">
              <Image src={"/cashout.png"} alt="Vector image" fluid />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="d-flex align-items-center py-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <div>
                <h3>Virtual Cards</h3>
                <p>
                  Use our virtual cards to handle subscriptions, make online
                  purchases
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h3>Pay bills</h3>
                <p>Hate queuing? Pay your bills from the app.</p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h3>Send Money</h3>
                <p>Send money to your acquaintances anywhere in the world</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="d-flex align-items-center py-5">
        <Container>
          <Row className="text-center">
            <Col md={6}>
              <Image
                src="/mockup.png"
                alt="mockup"
                height={350}
                style={{ objectFit: "contain" }}
              />
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center pt-5"
            >
              <div>
                <h2 className="mb-4">Get notified when we launch.</h2>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc1af3Ptztn_SohZVoEeMx94kvA0N0ASyCVmNigz8GWJZrofQ/viewform"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button className="primary-button">Join our Waitlist</Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={`d-flex align-items-center py-5 ${styles.download} position-relative`}
      >
        <img src="/light.png" className={styles.light} alt="" />
        <Container>
          <Row className="text-center">
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center pt-5 text-light"
            >
              <div>
                <h2 className="mb-4 font-weight-bold">
                  Coming to the app stores
                </h2>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc1af3Ptztn_SohZVoEeMx94kvA0N0ASyCVmNigz8GWJZrofQ/viewform"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button className="light-button">Join our Waitlist</Button>
                </a>
              </div>
            </Col>
            <Col md={6} className="mt-4 ">
              <Image
                src="/mockup.png"
                alt="mockup"
                height={350}
                style={{ objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
