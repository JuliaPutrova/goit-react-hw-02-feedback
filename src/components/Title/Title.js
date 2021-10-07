import React from 'react';
import PropTypes from 'prop-types';
import { RiFeedbackLine } from 'react-icons/ri';
import { Title } from './Title.styled';

function Container({ title, children }) {
  return (
    <div>
      <Title>{title}</Title>
      <RiFeedbackLine size={30} />
      {children}
    </div>
  );
}

//указываем пропс по умолчанию дла детей, т.к. мы не указываем isRequired
Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Container;
