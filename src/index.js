'use strict';

import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {findByShortName, VALID_NAMES} from "./lib/emoji";

const SimpleEmoji = ({shortName, style = {}, ...props}) => (
    <Text style={style} {...props}>{findByShortName(shortName)}</Text>
);

SimpleEmoji.propTypes = {
    ...Text.propTypes,
    shortName: PropTypes.oneOf(VALID_NAMES).isRequired
};

export default SimpleEmoji;
