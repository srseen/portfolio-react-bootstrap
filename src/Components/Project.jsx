import Website from "../assets/Website.jpg";
import ApiGateway from "../assets/APIGateway.jpg";
import Algorithm from "../assets/Algorithm.jpg";
import Account from "../assets/account.svg";

const Project = () => {
  return (
    <>
      <div className="container px-4 py-5" id="myproject">
        <h2 className="pb-2 border-bottom">My Projects</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Website})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Website
                </h3>
                <p className="mb-4">
                  React | Tailwind CSS | Vite | Responsive Design
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={Account}
                      alt="Profile"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                      style={{ backgroundColor: "white" }}
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#github"></use>
                    </svg>
                    <small>Frontend</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#code-slash"></use>
                    </svg>
                    <small>Web</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ApiGateway})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Microservices API Gateway
                </h3>
                <p className="mb-4">
                  Spring Cloud | Docker | Kubernetes | OAuth2
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={Account}
                      alt="Profile"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                      style={{ backgroundColor: "white" }}
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#diagram-3"></use>
                    </svg>
                    <small>Backend</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#cloud"></use>
                    </svg>
                    <small>Cloud</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Algorithm})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Data Structures & Algorithms
                </h3>
                <p className="mb-4">
                  Python | Graph Theory | Dynamic Programming | ML
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={Account}
                      alt="Profile"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                      style={{ backgroundColor: "white" }}
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#graph-up"></use>
                    </svg>
                    <small>DSA</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#cpu"></use>
                    </svg>
                    <small>Algorithm</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
