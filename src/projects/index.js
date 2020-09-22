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

const useStyles = makeStyles({
  root: {
    textAlign: "left",
  },
  media: {
    height: 184,
  },
});

function Projects() {
  const classes = useStyles();

  return (
    <Box display="flex" name="bokstest" flexGrow="3" alignItems="center">
      <Container maxWidth="md">
        <Grid container spacing={6} direction="row">
          {Object.keys(projectdata).map((project, i) => (
            <Grid key={i} item xs={6}>
              <Card className={classes.root}>
                <CardActionArea>
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
