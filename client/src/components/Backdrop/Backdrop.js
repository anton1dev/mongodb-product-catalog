import React from 'react';

import './Backdrop.css'

export const Backdrop = props => <div className={props.show ? 'backdrop show' : 'backdrop'} />;
