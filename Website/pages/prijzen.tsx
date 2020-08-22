import Layout from '../components/Layout';
import Container from '../components/Container';
import { PageCombination } from '../components/HeaderTags';
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
                            <h5 className="card-header bg-nn-primary text-white">Prijslijst</h5>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                Wat <span className="naynay">Nay Nay</span> doet
                                            </th>
                                            <th scope="col">Prijs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Intakegesprek + advies
                                                <br />
                                                <small className="text-muted">Op maat - Online</small>
                                            </td>
                                            <td>
                                                <strong>
                                                    &euro; 60 <small>/ uur gemiddeld</small>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Intakegesprek + advies
                                                <br />
                                                <small className="text-muted">Op maat - Op locatie</small>
                                            </td>
                                            <td>
                                                <strong>
                                                    &euro; 70 <small>/ uur gemiddeld</small>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Interieur Design Basis</td>
                                            <td>
                                                <strong>
                                                    &euro; 80 <small>/ uur gemiddeld</small>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Interieur Design Luxe</td>
                                            <td>
                                                <strong>
                                                    &euro; 80 <small>/ uur gemiddeld</small>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Decoratie</td>
                                            <td>
                                                <strong>
                                                    &euro; 70 <small>/ uur gemiddeld</small>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Lichtplan</td>
                                            <td>
                                                <strong>
                                                    &euro; 70 <small>/ uur gemiddeld</small>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Prijzen;
