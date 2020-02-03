import Layout from '../components/Layout';
import Container from '../components/Container';
import { PageCombination } from '../components/HeaderTags';
import { Logo } from '../components/Icons';
import Jumbotron from '../components/Jumbotron';

const PageInformation = {
    title: 'Prijzen indicatie',
    pageTitle: 'Prijsinformate',
};

const Prijzen = (): JSX.Element => {
    return (
        <Layout pageTitle={PageInformation.pageTitle}>
            <Jumbotron backDrop="/b-prijzen.jpg" />
            <Container>
                <div className="row">
                    <div className="col-sm-12">
                        <PageCombination first={PageInformation.title} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div className="card border-nn-primary">
                            <h5 className="card-header bg-nn-primary text-white">De eerste stap</h5>
                            <div className="card-body">
                                <h5 className="card-title">Intakegesprek en advies</h5>
                                <p className="card-text">
                                    Het inhuren van een interieur designer is een investering qua tijd en geld. Het is
                                    daarom belangrijk om helder te krijgen wat het doel is wat we gezamenlijk willen
                                    bereiken en tussendoor af te stemmen.
                                </p>
                            </div>
                            <div className="card-header">Online aanvraag / Op Locatie</div>
                            <div className="card-header">Gemiddelde tijd per ruimte</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">1 – 2 uur</li>
                            </ul>
                            <div className="card-header">Resultaat</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Verslag intakegesprek</li>
                                <li className="list-group-item">uitgewerkt advies op maat</li>
                            </ul>
                            <div className="card-footer bg-success text-center">
                                <span className="h6 text-white">
                                    <strong>
                                        Online: &euro; 65 <small>/ uur gemiddeld</small>
                                    </strong>
                                </span>
                                <span className="h6 text-white ml-5">
                                    <strong>
                                        Op locatie: &euro; 80 <small>/ uur gemiddeld</small>
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-img-top">
                                <Logo />
                            </div>
                            <div className="card-body-top">
                                <h5 className="card-title">Interieurdesign Basis</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                            </div>
                            <div className="card-header">Op Locatie</div>
                            <div className="card-header">Gemiddelde tijd per ruimte</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">4 – 8 uur</li>
                            </ul>
                            <div className="card-header">Resultaat</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Programma van Eisen</li>
                                <li className="list-group-item">Plattegrond met nieuwe indeling</li>
                                <li className="list-group-item">Kleuradvies</li>
                            </ul>
                            <div className="card-body"></div>
                            <div className="card-footer bg-success text-center">
                                <span className="h6 text-white">
                                    <strong>
                                        &euro; 90 <small>/ uur gemiddeld</small>
                                    </strong>
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img-top bg-nn-highlights">
                                <Logo />
                            </div>
                            <div className="card-body-top">
                                <h5 className="card-title">Interieurdesign Luxe</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                            </div>
                            <div className="card-header">Op Locatie</div>
                            <div className="card-header">Gemiddelde tijd per ruimte</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">8 – 12 uur</li>
                            </ul>
                            <div className="card-header">Resultaat</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Programma van Eisen</li>
                                <li className="list-group-item">Plattegrond met nieuwe indeling</li>
                                <li className="list-group-item">Kleuradvies</li>
                                <li className="list-group-item">Advies inclusief overzicht leveranciers</li>
                                <li className="list-group-item">Nieuw meubilair</li>
                            </ul>
                            <div className="card-body"></div>
                            <div className="card-footer bg-success text-center">
                                <span className="h6 text-white">
                                    <strong>
                                        &euro; 90 <small>/ uur gemiddeld</small>
                                    </strong>
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img-top bg-nn-secondary">
                                <Logo />
                            </div>
                            <div className="card-body-top">
                                <h5 className="card-title">Accessoire pakket</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                            </div>
                            <div className="card-header">Op Locatie</div>
                            <div className="card-header">Gemiddelde tijd per ruimte</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">2 – 4 uur</li>
                            </ul>
                            <div className="card-header">Resultaat</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Advies voor wisseling accessoires winter/zomer</li>
                                <li className="list-group-item">Advies inclusief overzicht leveranciers</li>
                            </ul>
                            <div className="card-body"></div>
                            <div className="card-footer bg-success text-center">
                                <span className="h6 text-white">
                                    <strong>
                                        &euro; 90 <small>/ uur gemiddeld</small>
                                    </strong>
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img-top bg-nn-primary">
                                <Logo />
                            </div>
                            <div className="card-body-top">
                                <h5 className="card-title">Lichtplan</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                            </div>
                            <div className="card-header">Op Locatie</div>
                            <div className="card-header">Gemiddelde tijd per ruimte</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">2 – 4 uur</li>
                            </ul>
                            <div className="card-header">Resultaat</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Plan hoe en welke lampen bijdragen aan de gewenste sfeer of functie
                                </li>
                            </ul>
                            <div className="card-body"></div>
                            <div className="card-footer bg-success text-center">
                                <span className="h6 text-white">
                                    <strong>
                                        &euro; 120 <small>/ uur gemiddeld</small>
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Prijzen;
