import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        // uuidv4 is an npm package installed to create a universally unique identifier for each submission
        newFeedback.id = uuidv4()
        // spread operator to get all current feedback items that are already there
        // taking all of the objects currently in 'feedback' and putting them into the spread operator array
        // will take all the current 'feedback' items + the 'newFeedback' item added into the submitted feedback
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this?')) 
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList 
                    feedback={feedback} 
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    )
}

export default App;