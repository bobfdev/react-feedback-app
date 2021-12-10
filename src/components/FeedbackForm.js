import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

// handleAdd prop passed in from App.js
function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        // if no text in form then disable send button
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        // if text is less than 10 character disable send button and respond with message
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        // if text is more than 10 characters enable send button
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        // form submit calls preventDefault to prevent the default behavior from submitting to the actual file
        e.preventDefault();
        // new feedback object is constructed if message text length is greater than 10 characters
        if(text.trim().length > 10) {
            const newFeedback = {
            // setting an object with "text" and "rating" as the values from the state
                text,
                rating
            }

            handleAdd(newFeedback)
            
            // clear text field after feedback submission
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input 
                        onChange={handleTextChange}    
                        type="text" 
                        placeholder="Write a review" 
                        value={text}
                    />
                    <Button 
                        type="submit"
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;
