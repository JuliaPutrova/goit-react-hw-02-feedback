import React from 'react';
import { NotificationMessage } from './Notification.styled';

function Notification({ message }) {
  return (
    <>
      <NotificationMessage>{message}</NotificationMessage>
    </>
  );
}

export default Notification;