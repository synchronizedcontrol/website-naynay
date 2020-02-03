import { WithLove } from './Icons';

const Footer = (): JSX.Element => (
    <footer className="mt-4">
        <div className="container-fluid p-3 p-md-5">
            <ul className="footer-links">
                <li>
                    <a href="/inspiratie">Inspiratie</a>
                </li>
                <li>
                    <a href="/prijzen">Prijzen</a>
                </li>
                <li>
                    <a href="/over-ons">Over NayNay</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <p>
                Copyright ©2020 All rights reserved | This template is made with <WithLove /> by iSights
            </p>
        </div>
    </footer>
);

export default Footer;
