import React from 'react';
import Proptypes from 'prop-types';

import { NotificationMessage } from './Notification.styled';

function Notification({ message }) {
  return (
    <>
      <NotificationMessage>{message}</NotificationMessage>
    </>
  );
}

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};

export default Notification;
