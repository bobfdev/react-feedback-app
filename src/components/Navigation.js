import { Navigate, useNavigate } from 'react-router-dom';
// Redirect is now Navigate in React Router v6

function Navigation() {
    const status = 404

    const navigate = useNavigate()

    const onClick = () => {
        navigate('/')
    }

    if (status === 200) {
        return <Navigate to='/notfound' />
    } else {
        return (
            <>
                <h1>Site is working</h1>
                <button onClick={onClick}>Click</button>
            </>
        )
    }

}

export default Navigation;