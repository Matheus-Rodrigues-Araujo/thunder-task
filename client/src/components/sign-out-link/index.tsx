import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutLink = () => {
  return (
    <Link to="/" title="Log out" className="ds-header-link mb-5">
      <FaSignOutAlt />
      Log out
    </Link>
  );
};

export default SignOutLink;
