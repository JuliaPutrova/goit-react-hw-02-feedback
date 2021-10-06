import React, { Component } from 'react';
import { Title, StatisticItem } from './Statistics.styled';
import PropTypes from 'prop-types';
import { FcStatistics } from 'react-icons/fc';

function Statistics({ title, good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Title>{title}</Title>
      <FcStatistics size={30} />
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positivePercentage} %</StatisticItem>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
