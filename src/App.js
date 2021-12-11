import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import BlogPost from './components/BlogPost';
import Navigation from './components/Navigation';

function App() {

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
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
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