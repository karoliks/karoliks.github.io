import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Nav() {
  const [value, setValue] = React.useState("projects");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value="projects" label="Projects" component={Link} to={"/"} />
        <Tab value="gallery" label="Gallery" component={Link} to={"/gallery"} />
      </Tabs>
    </div>
  );
}

export default Nav;
