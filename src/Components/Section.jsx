import Programmer from "../assets/programmer.jpg";

const Section = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5" id="section">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={Programmer}
              className="d-block mx-lg-auto img-fluid rounded-5 "
              alt="Profile"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Hi, I&apos;m Seereen Yangpaknam
            </h1>
            <p className="lead">
              A dedicated Backend Developer specializing in building robust and
              scalable server architectures. With deep expertise in Node.js,
              .Net, Spring Boot and database systems including PostgreSQL and
              MongoDB, I create high-performance APIs and microservices that
              power modern applications. Passionate about system optimization,
              database design, and clean code architecture.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="#myproject" className="btn btn-dark btn-lg px-4 me-md-2">
                View Projects
              </a>
              <a
                href="#footer"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
