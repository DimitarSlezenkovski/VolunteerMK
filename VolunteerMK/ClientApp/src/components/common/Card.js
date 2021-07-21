import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Button,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    media: {
        height: 140,
    },
});

const CardVolunteer = (props) => {
    const classes = useStyles();

    const ads = props?.ads;

    return (
        <Grid style={{ display: "flex", justifyContent: "space-around"}}>
            {
                ads.map((e, index) => {
                    return (
                        <Grid className={classes.root} key={index}>
                            <Card style={{ background: "#F4F4F4", padding: 10, borderRadius: 10}}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={e.imageUrl}
                                        title={e.alt}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {e.tags.map((e, index) => {
                                                return index == 1 ? e : " | " + e;
                                            })}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {e.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", }}>
                                    <Button style={{ width: "98%", background: "#32C71A" }}>
                                        Волонтирај
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}
export { CardVolunteer as Card }