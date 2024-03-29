import "./Searchbar.scss";
import { Button, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

import avatar from "../../assets/avatar.png";

type Props = {
  direction: "ltr" | "rtl";
  setDirection: React.Dispatch<React.SetStateAction<"rtl" | "ltr">>;
};

const Searchbar = ({ direction, setDirection }: Props) => {
  return (
    <section className="search-bar d-flex align-items-center justify-content-between p-3 bg-white">
      <div className="search position-relative">
        <Form.Control
          type="search"
          placeholder="Type A Keyword"
          className="shadow-none border rounded-3"
        />
        <FiSearch className="position-absolute top-50 translate-middle-y mx-2" />
      </div>
      <div>
        <Button
          size="sm"
          onClick={() => {
            setDirection(direction === "rtl" ? "ltr" : "rtl");
          }}
        >
          {direction === "rtl" ? "English" : "Arabic"}
        </Button>
        <span className="position-relative mx-2">
          <IoMdNotifications className="fs-4" />
        </span>
        <Image src={avatar} alt="avatar" />
      </div>
    </section>
  );
};

export default Searchbar;
