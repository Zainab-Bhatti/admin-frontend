import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#!">Admin DashBoard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">

                        </ul>

                        <button
                            className="btn btn-outline-secondary my-2 my-sm-0"
                            onClick={() => navigate("/user/login")}
                        >
                            Log-out
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
};


export default Navbar;