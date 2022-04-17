import React from 'react';
import { useHistory} from 'react-router-dom';

function NotFound() {
    let history = useHistory();
    const handleClick = () => {
        history.push('/');
        document.location.reload()

    }

    return (
        <div>
            <h1>404 - Not Found!</h1>
            <button onClick={handleClick}>Go Home</button>
        </div>
    );
}
export default NotFound;