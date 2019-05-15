import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const SimpleAppBar: React.FC = ({ children }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                {children}
            </Typography>
        </Toolbar>
    </AppBar>
);
