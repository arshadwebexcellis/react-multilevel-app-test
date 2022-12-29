import { Link, Outlet, useNavigate } from "react-router-dom";

export default function MainLayout(props) {
  const navigate = useNavigate();
  console.log("Layout props", props);
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/child-app", { replace: true, state: { from: "main" } });
              }}
            >
              App1
            </a>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
