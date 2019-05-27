import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    title: {
        flex: 1
    }
});

export const HeaderTitle: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Typography variant="h6" color="inherit" className={classes.title}>
            {children}
        </Typography>
    );
};
