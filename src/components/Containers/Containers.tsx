import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

/**
 * FlexContainer
 * - flex: 1
 */
export const FlexContainer: React.FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box flex="1" {...rest}>
            {children}
        </Box>
    );
};

/**
 * HorizontalContainer
 * - flex: 1
 * - flexDirection: row
 */
export const HorizontalContainer: React.FC<BoxProps> = ({
    children,
    ...rest
}) => {
    return (
        <Box flex="1" display="flex" flexDirection="row" {...rest}>
            {children}
        </Box>
    );
};

/**
 * ViewHorizontalContainer
 * - height: 100vh
 * - flexDirection: row
 */
export const ViewHorizontalContainer: React.FC<BoxProps> = ({
    children,
    ...rest
}) => {
    return (
        <Box height="100vh" display="flex" flexDirection="row" {...rest}>
            {children}
        </Box>
    );
};

/**
 * VerticalContainer
 * - flex: 1
 * - flexDirection: column
 */
export const VerticalContainer: React.FC<BoxProps> = ({
    children,
    ...rest
}) => {
    return (
        <Box flex="1" display="flex" flexDirection="column" {...rest}>
            {children}
        </Box>
    );
};

/**
 * ViewVerticalContainer
 * - height: 100vh
 * - flexDirection: column
 */
export const ViewVerticalContainer: React.FC<BoxProps> = ({
    children,
    ...rest
}) => {
    return (
        <Box height="100vh" display="flex" flexDirection="column" {...rest}>
            {children}
        </Box>
    );
};

/**
 * CenteredContainer
 * - Centers content inside a flex container
 * - flex: 1
 */
export const CenteredContainer: React.FC<BoxProps> = ({
    children,
    ...rest
}) => {
    return (
        <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            {...rest}
        >
            {children}
        </Box>
    );
};

/**
 * ViewCenteredContainer
 * - Centers content in the entire view
 * - height: 100vh
 */
export const ViewCenteredContainer: React.FC<BoxProps> = ({
    children,
    ...rest
}) => {
    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            {...rest}
        >
            {children}
        </Box>
    );
};
