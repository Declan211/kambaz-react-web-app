import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2222/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CSS-Logo.jpg" width={200} />
            <div>
              <h5> CS2222 CSS </h5>
              <p className="wd-dashboard-course-title">
                Styling  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/9999/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cake.jpg" width={200} />
            <div>
              <h5> CAKE9999 </h5>
              <p className="wd-dashboard-course-title">
                How to make cake  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/101/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/sigma.jpg" width={200} />
            <div>
              <h5> SIG101 </h5>
              <p className="wd-dashboard-course-title">
                How to be a sigma  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/505/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/science.jpg" width={200} />
            <div>
              <h5> SC505 </h5>
              <p className="wd-dashboard-course-title">
                Science  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/666/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/khan.jpg" width={200} />
            <div>
              <h5> HIST666 </h5>
              <p className="wd-dashboard-course-title">
                History of Mongolia  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/111/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/recess.jpg" width={200} />
            <div>
              <h5> Recess111 </h5>
              <p className="wd-dashboard-course-title">
               Recess </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
);}
