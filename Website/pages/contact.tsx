import Layout from '../components/Layout';
import Container from '../components/Container';
import { PageCombination, H2 } from '../components/HeaderTags';
import Jumbotron from '../components/Jumbotron';

const PageInformation = {
    title: 'Neem contact op',
    pageTitle: 'Contact opnemen',
};

const Contact = (): JSX.Element => (
    <Layout pageTitle={PageInformation.pageTitle}>
        <Jumbotron backDrop="/b-contact.jpg" />
        <Container>
            <div className="row">
                <div className="col-sm-12">
                    <PageCombination first={PageInformation.title} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <img className="img-fluid" src="/naynay-int-2.jpg" alt="Nay Nay Interior" />
                </div>
                <div className="col-sm-6">
                    <H2 first={'Vul hier'} second={'uw vraag in'} />
                    <form>
                        <div className="form-group">
                            <label htmlFor="emailAddressContactForm">Email adres</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailAddressContactForm"
                                aria-describedby="emailHelp"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                Wij zullen nooit uw gegevens met anderen delen!
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="topicSelectorContactForm">Kies hieronder uw onderwerp</label>
                            <select className="form-control" id="topicSelectorContactForm" defaultValue="0">
                                <option value="0" disabled hidden>
                                    Maak een keuze
                                </option>
                                <option value="1">Intakegesprek en advies</option>
                                <option value="2">Interieurdesign</option>
                                <option value="3">Accessoire pakket</option>
                                <option value="4">Lichtplan</option>
                                <option value="5">Overige..</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="messageBodyContactForm">Uw bericht aan ons</label>
                            <textarea className="form-control" id="messageBodyContactForm" rows={6}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    </Layout>
);

export default Contact;
