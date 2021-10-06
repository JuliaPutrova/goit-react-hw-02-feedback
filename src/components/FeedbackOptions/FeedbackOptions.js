import React from 'react';
import { OptionsList, Button } from './FeedbackOptions.styled.jsx';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul>
        {options.map(option => (
          <OptionsList key={option}>
            <Button type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </OptionsList>
        ))}
      </ul>
    </>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// function FeedbackOptions({options, onLeaveFeedback}) {
//     return (
//         <>

//             {options.map((option) =>
//                 <button key={option} type="button" onClick={onLeaveFeedback}>
//                     {option}
//                 </button>

//             )}

//         </>
//     );
// };
