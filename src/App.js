import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Projects from "./projects";
import Projects2 from "./projects2";
import Platform from "./platform";
import Gallery from "./gallery";
import Nav from "./nav";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { GameEngine } from "react-game-engine";

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
              <Route path="/" exact component={Projects2} />
{/* 
              <Route path="/" exact component={Platform}>
              <GameEngine
                ref={useRef("engine")}
                systems={[]}
              >
              </GameEngine> */}
              <Route path="/gallery" exact component={Gallery} />
            </Switch>
          </Box>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
