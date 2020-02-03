import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import { PageCombination, H2Link } from '../components/HeaderTags';
import '../assets/styles/styles.scss';

const PageInformation = {
    tagLine: 'It is wise to know when to say Nay Nay!',
    title: 'Welkom bij NayNay',
};

const Home = (): JSX.Element => (
    <Layout pageTitle={PageInformation.title}>
        <Jumbotron backDrop="/background_banner.jpg" />
        <Container>
            <div className="row">
                <div className="col-sm-12">
                    <PageCombination first={PageInformation.title} second={PageInformation.tagLine} />
                </div>
                <div className="row justify-content-md-center mt-4">
                    <div className="col-sm-8">
                        <p className="text-center">
                            In je interieur is het van belang om eigenwijs te zijn en te weten wanneer je Nay Nay moet
                            zeggen. Het gaat uiteindelijk om de plek waar je je moet kunnen ontspannen, waar je tijd met
                            familie en vrienden door kan brengen en waar je je veilig en geborgen voelt. Een interieur
                            dat daarbij past, ongeacht hoe groot of klein de verandering die daarvoor ook nodig is….dat
                            is iets waar ik je graag bij wil helpen!
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 mt-4">
                    <H2Link first="Meer weten over wat wij voor u kunnen betekenen?" second="/prijzen" />
                </div>
            </div>
        </Container>
    </Layout>
);

export default Home;
