import styled, {css} from 'styled-components';
import React from 'react';
import {spacing} from 'theme';
import Button, {SDK} from 'button';
import PropTypes from 'prop-types';

console.log(new SDK());

const APPEARANCES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
};

const StyledDiv = styled.div`
    background-color: blue;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 0.88rem;
    font-weight: 500;
    height: 80px;
    line-height: 38px;
    min-width: 400px;
    outline: none;
    overflow: hidden;
    padding: 0 ${spacing.extraLarge};
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.2s ease 0s;
    user-select: none;
    white-space: nowrap;

    :hover {
        color: #000;
        border: 1px solid #000;
        background-color: #fff;
    }

    ${(props) =>
        props.variant === APPEARANCES.SECONDARY &&
        css`
            color: #666;
            background-color: white;
            border: 1px solid #eaeaea;

            :hover {
                color: #fff;
                border: 1px solid #000;
                background-color: #000;
            }
        `}
`;

const Div = (props) => (
    <StyledDiv {...props}>
        <Button></Button>
    </StyledDiv>
);

Div.propTypes = {
    disabled: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(APPEARANCES))
};

Div.defaultProps = {
    disabled: false,
    variant: APPEARANCES.PRIMARY
};

export default Div;
