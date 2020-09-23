import React from "react";
import {
  Card,
  Grid,
  makeStyles,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core";
import { projectdata } from "../data/projectdata";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import "./index.css";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "left",
  },
  media: {
    height: 184,
  },
  card: {
    borderRadius: "none",
    // borderWidth: "4px",
    // borderColor: "#FFDBDA",
    // borderStyle: "solid",
    // backgroundColor: "#DB7F8E",
    color: "#DB7F8E",
    // boxShadow: "none",
  },
});

function Projects() {
  const classes = useStyles();

  function routeTo(link) {
    window.open(link); //This will open Google in a new
  }

  return (
    <Box display="flex" name="bokstest" flexGrow="3" alignItems="center">
      <Container maxWidth="md">
        <Grid container spacing={6} direction="row">
          {Object.keys(projectdata).map((project, i) => (
            <Grid key={i} item xs={6}>
              <Card classes={{ root: classes.card }}>
                <CardActionArea
                  onClick={() => routeTo(projectdata[project]["link"])}
                >
                  <CardMedia
                    className={classes.media}
                    image={projectdata[project]["img"]}
                    title={projectdata[project]["title"]}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {projectdata[project]["title"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {projectdata[project]["desc"]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
