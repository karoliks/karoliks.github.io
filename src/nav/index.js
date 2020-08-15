import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Nav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value="home" label="Home" component={Link} to={"/"} />

        <Tab value="about" label="About" component={Link} to={"/about"} />
      </Tabs>
    </div>
  );
}

export default Nav;
