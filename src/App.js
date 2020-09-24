import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Projects from "./projects";
import Gallery from "./gallery";
import Nav from "./nav";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#041B15",
    },
    secondary: {
      main: "#4db6ac",
    },
  },
});
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* <Container style={{ backgroundColor: "#cfe8fc", minHeight: "100vh" }}> */}
        <Container style={{ height: "100vh" }}>
          <Box
            display="flex"
            flexDirection="column"
            style={{ height: "100vh" }}
          >
            {/* <Nav /> */}

            <Switch>
              <Route path="/" exact component={Projects} />
              <Route path="/gallery" exact component={Gallery} />
            </Switch>
          </Box>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
