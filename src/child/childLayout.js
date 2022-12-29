import { Link, Outlet, useNavigate } from "react-router-dom";

export default function ChildLayout(props) {
  const navigate = useNavigate();
  console.log("Layout props", props);
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/child-app">Home</Link>
          </li>
          <li>
            <Link to="/child-app/about">About</Link>
          </li>

          <li>
            <Link to="/child-app/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
