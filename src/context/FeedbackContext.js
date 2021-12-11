import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 8,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add feedback item
    const addFeedback = (newFeedback) => {
        // uuidv4 is an npm package installed to create a universally unique identifier for each submission
        newFeedback.id = uuidv4()
        // spread operator to get all current feedback items that are already there
        // taking all of the objects currently in 'feedback' and putting them into the spread operator array
        // will take all the current 'feedback' items + the 'newFeedback' item added into the submitted feedback
        setFeedback([newFeedback, ...feedback])
    }


    // delete feedback item
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this?')) 
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // update feedback item
    const updateFeedback = (id, updItem) => {
        // run condition if correct id passed in is the one being updated, if id doesn't match then return current item
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...updItem } : item))
    }

    // set feedback item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }


    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext;