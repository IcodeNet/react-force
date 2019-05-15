import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../../test/StoryDecorator';
import { SimpleAppBar } from '..';
import {
    CenteredContainer,
    HorizontalContainer,
    VerticalContainer,
    ViewCenteredContainer,
    ViewHorizontalContainer,
    ViewVerticalContainer
} from './Containers';

const useStyles = makeStyles((theme: Theme) => ({
    lhs: {
        minWidth: 320,
        overflow: 'auto',
        backgroundColor: lighten(theme.palette.primary.main, 0.8)
    },
    rhs: {
        flex: 1,
        overflow: 'auto'
    },
    lhsCard: {
        borderRadius: 4,
        margin: theme.spacing(2),
        height: 50,
        backgroundColor: theme.palette.primary.dark
    },
    rhsCard: {
        borderRadius: 4,
        margin: theme.spacing(2),
        height: 125,
        backgroundColor: theme.palette.secondary.main
    }
}));

const CenteredContainerExample = () => {
    const theme: Theme = useTheme();
    const lightColor = lighten(theme.palette.primary.main, 0.7);
    return (
        <ViewVerticalContainer>
            <SimpleAppBar>React Force</SimpleAppBar>
            <CenteredContainer bgcolor={lightColor} p={2}>
                <Typography component="h1" variant="h3">
                    Centered Container
                </Typography>
            </CenteredContainer>
        </ViewVerticalContainer>
    );
};

const HorizontalContainerExample = () => {
    const theme: Theme = useTheme();
    const leftColor = lighten(theme.palette.primary.main, 0.7);
    const rightColor = theme.palette.secondary.main;
    return (
        <ViewVerticalContainer>
            <SimpleAppBar>React Force</SimpleAppBar>
            <HorizontalContainer>
                <VerticalContainer bgcolor={leftColor} p={2}>
                    <Typography component="h1" variant="h3">
                        Left
                    </Typography>
                </VerticalContainer>
                <VerticalContainer bgcolor={rightColor} p={2}>
                    <Typography component="h1" variant="h3">
                        Right
                    </Typography>
                </VerticalContainer>
            </HorizontalContainer>
        </ViewVerticalContainer>
    );
};

const VerticalContainerExample = () => {
    const theme: Theme = useTheme();
    const topColor = lighten(theme.palette.primary.main, 0.7);
    const bottomColor = theme.palette.secondary.main;
    return (
        <ViewVerticalContainer>
            <SimpleAppBar>React Force</SimpleAppBar>
            <VerticalContainer>
                <VerticalContainer bgcolor={topColor} p={2}>
                    <Typography component="h1" variant="h3">
                        Top
                    </Typography>
                </VerticalContainer>
                <VerticalContainer bgcolor={bottomColor} p={2}>
                    <Typography component="h1" variant="h3">
                        Bottom
                    </Typography>
                </VerticalContainer>
            </VerticalContainer>
        </ViewVerticalContainer>
    );
};

const ScrollingContainerExample = () => {
    const classes = useStyles();
    return (
        <ViewVerticalContainer>
            <SimpleAppBar>React Force</SimpleAppBar>
            <HorizontalContainer minHeight={0}>
                <div className={classes.lhs}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                        <div className={classes.lhsCard} />
                    ))}
                </div>
                <div className={classes.rhs}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                        <div className={classes.rhsCard} />
                    ))}
                </div>
            </HorizontalContainer>
        </ViewVerticalContainer>
    );
};

const ViewCenteredContainerExample = () => {
    const theme: Theme = useTheme();
    const lightColor = lighten(theme.palette.primary.main, 0.7);
    return (
        <ViewCenteredContainer bgcolor={lightColor} p={2}>
            <Typography component="h1" variant="h3">
                View Centered Container
            </Typography>
        </ViewCenteredContainer>
    );
};

const ViewHorizontalContainerExample = () => {
    const theme: Theme = useTheme();
    const leftColor = lighten(theme.palette.primary.main, 0.7);
    const rightColor = theme.palette.secondary.main;
    return (
        <ViewHorizontalContainer>
            <VerticalContainer bgcolor={leftColor} p={2}>
                <Typography component="h1" variant="h3">
                    Left
                </Typography>
            </VerticalContainer>
            <VerticalContainer bgcolor={rightColor} p={2}>
                <Typography component="h1" variant="h3">
                    Right
                </Typography>
            </VerticalContainer>
        </ViewHorizontalContainer>
    );
};

const ViewVerticalContainerExample = () => {
    const theme: Theme = useTheme();
    const topColor = lighten(theme.palette.primary.main, 0.7);
    const bottomColor = theme.palette.secondary.main;
    return (
        <ViewVerticalContainer>
            <VerticalContainer bgcolor={topColor} p={2}>
                <Typography component="h1" variant="h3">
                    Top
                </Typography>
            </VerticalContainer>
            <VerticalContainer bgcolor={bottomColor} p={2}>
                <Typography component="h1" variant="h3">
                    Bottom
                </Typography>
            </VerticalContainer>
        </ViewVerticalContainer>
    );
};

storiesOf('Containers', module)
    .addDecorator(StoryDecorator)
    .add('Centered Container', () => <CenteredContainerExample />)
    .add('Horizontal Container', () => <HorizontalContainerExample />)
    .add('Vertical Container', () => <VerticalContainerExample />)
    .add('Scrolling Container', () => <ScrollingContainerExample />)
    .add('View Centered Container', () => <ViewCenteredContainerExample />)
    .add('View Horizontal Container', () => <ViewHorizontalContainerExample />)
    .add('View Vertical Container', () => <ViewVerticalContainerExample />);