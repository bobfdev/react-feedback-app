import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                // motion.div is from framer-motion install
                <motion.div 
                    // must have 'key' because it is a list
                    key={item.id}
                    // double {{}} because we are passing in an object  
                    // initial has an opacity: 0 because that is the default and we want it to be invisible to begin with
                    initial={{opacity: 0}}
                    // animate has an opacity: 1 so that feedback is visible when submitted
                    animate={{opacity: 1}}
                    // exit is fade out to make feedback invisible when deleted
                    exit={{opacity: 0}}
                >
                    <FeedbackItem 
                        key={item.id} 
                        item={item} 
                    />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             <FeedbackItem 
    //                 key={item.id} 
    //                 item={item} 
    //                 handleDelete={handleDelete}
    //             />
    //         ))}
    //     </div>
    // )
}


export default FeedbackList;
