import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import BlogPost from './components/BlogPost';
import Navigation from './components/Navigation';

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
            // exact is so only '/' will include the homepage items and not every other page with '/' + 'about' etc
            // path is '/' because it is to the homepage
            // inside of using 'component' use 'element' 
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                <Routes>
                    <Route 
                        exact path="/"
                        element={
                            <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList 
                            feedback={feedback} 
                            handleDelete={deleteFeedback}
                        />
                            </>
                        }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/blogpost/' element={<BlogPost />} />
                    <Route path='/blogpost/:id' element={<BlogPost />} />
                    <Route path='/blogpost/:id/:name' element={<BlogPost />} />
                    <Route path='/navigation/' element={<Navigation />} />
                </Routes>

                    <NavLink to='/' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeClassName='active'>
                        About
                    </NavLink>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;