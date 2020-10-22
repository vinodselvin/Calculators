import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, close, title, link }) {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={close}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={close}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            save
            </Button> */}
                    </Toolbar>
                </AppBar>
                <iframe
                    style={{ width: "100%", height: "100%" }}
                    title="Cake"
                    src={link}
                ></iframe>
            </Dialog>
        </div>
    );
}