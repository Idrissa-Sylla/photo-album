import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary">
              Hello, everyone. This is a Photo Album and I'm trying to make this
              sentence as long as possible so that we can see how it look like
              on the screen
            </Typography>

            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid>
                  <Button variant="contained">See my Photos</Button>
                </Grid>
                <Grid>
                  <Button variant="outlined">Secondary action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid key={card} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://picsum.photos/id/29/200/300"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textPrimary">
          Something here to give the footer a purpose
        </Typography>
      </footer>
    </>
  );
}

export default App;
