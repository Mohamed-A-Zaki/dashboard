import { Form } from "react-bootstrap";
import "./Searchbar.scss";

import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { Image } from "react-bootstrap";
import logo from "../../assets/avatar.png";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <div className="search-bar d-flex align-items-center justify-content-between p-3 bg-white">
      <div className="search position-relative">
        <Form.Control
          type="search"
          placeholder="Type A Keyword"
          className="shadow-none border rounded-3"
        />
        <FiSearch className="position-absolute top-50 translate-middle-y mx-2"/>
      </div>
      <div>
        <span className="position-relative mx-2">
          <IoMdNotifications className="fs-4"/>
        </span>
        <Image src={logo} />
      </div>
    </div>
  );
};

export default Searchbar;
