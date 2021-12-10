import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
    // Calculate average rating 
    // Callback function
    // reduce is a high order array method
    // acc is accumulator and cur is current
    // 0 is the second argument, default for the accumulator 
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    // returns only 1 decimal place for the average rating number (ex. 9.2 instead of 9.15)
    // (/[.,]0$/,'') expression takes off any trailing 0's from the average rating number
    // replace (/[.,]0$/,'') means if it's 0 then replace it with nothing (ex. 9 instead of 9.0)
    average = average.toFixed(1).replace(/[.,]0$/,'')


    // ternary operator example: {isNaN(average) ? 0 : average}
    // NaN = not a number
    return (
        <div className="feedback-stats">
           <h4>{feedback.length} Reviews</h4>
           <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;
