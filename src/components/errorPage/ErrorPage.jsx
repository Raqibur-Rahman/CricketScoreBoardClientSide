
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <p className='font-semibold text-xl'>Oops! Looks like we&apos;re still working on finding what you&apos;re looking for.</p>
                <Link to='/'>
                    <button className="btn btn-warning pb-0 mb-0 mt-4">Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
