import { WithLove } from './Icons';
import ActiveLink from './ActiveLink';

const Footer = (): JSX.Element => (
    <footer className="mt-4">
        <div className="container-fluid p-3 p-md-5">
            <ul className="footer-links">
                <li>
                    <ActiveLink href="/wat-bieden-we" activeClassName="active">
                        <a className="nav-link">
                            Wat bieden we? <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/prijzen" activeClassName="active">
                        <a className="nav-link">
                            Prijzen <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/over-ons" activeClassName="active">
                        <a className="nav-link">
                            Over NayNay <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/contact" activeClassName="active">
                        <a className="nav-link">
                            Contact <span className="sr-only">(current)</span>
                        </a>
                    </ActiveLink>
                </li>
            </ul>
            <p>
                Copyright ©2020 All rights reserved | This template is made with <WithLove /> by iSights
            </p>
        </div>
    </footer>
);

export default Footer;
