import ActiveLink from './ActiveLink';

const Navigation = (): JSX.Element => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src="/logo.png" />
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <ActiveLink href="/" activeClassName="active">
                        <a className="nav-link">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Inspiratie</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Wat bieden we?</a>
                </li>
                <li className="nav-item">
                    <ActiveLink href="/prijzen" activeClassName="active">
                        <a className="nav-link">
                            Prijzen <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
                <li className="nav-item">
                    <ActiveLink href="/over-ons" activeClassName="active">
                        <a className="nav-link">
                            Over NayNay <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
                <li className="nav-item">
                    <ActiveLink href="/contact" activeClassName="active">
                        <a className="nav-link">
                            Contact <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;
