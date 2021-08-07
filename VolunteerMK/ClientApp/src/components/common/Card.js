import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "50vw",
    height: "98vh",
    [theme.breakpoints.down("md")]: {
      maxWidth: 200,
    },
  },
  media: {
    height: 140,
  },
}));

const CardVolunteer = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const ads = props?.ads;

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return ads.map((e, index) => {
    return (
        <Card 
          style={{
            background: "#F4F4F4",
            padding: 10,
            borderRadius: 10,
            margin: 10,
            width: "14vw",
          }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={e.imageUrl}
              title={e.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {e.tags.map((e, index) => {
                  return index == 0 ? e + " | " : e;
                })}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {e.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Button style={{ width: "15vw", background: "#32C71A" }}>
              Волонтирај
            </Button>
          </CardActions>
        </Card>
    );
  });
};
export { CardVolunteer as Card };
