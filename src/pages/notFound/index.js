import React from 'react';
import './styles.css';
import { useHistory} from 'react-router-dom';

function NotFound() {
    let history = useHistory();
    const handleClick = () => {
        history.push('/');
        document.location.reload()

    }

    return (
        <div className="container404">
            <h1>404 - Not Found!</h1>
            <button onClick={handleClick}>Go Home</button>
        </div>
    );
}
export default NotFound;