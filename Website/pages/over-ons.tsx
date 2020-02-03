import Layout from '../components/Layout';
import Container from '../components/Container';
import { H2, PageCombination } from '../components/HeaderTags';
import Jumbotron from '../components/Jumbotron';
import '../assets/styles/styles.scss';

const PageInformation = {
    title: 'Over NayNay',
    pageTitle: 'Over ons',
};

const OverOns = (): JSX.Element => (
    <Layout pageTitle={PageInformation.pageTitle}>
        <Jumbotron backDrop="/b-over-ons.jpg" />
        <Container>
            <div className="row">
                <div className="col-sm-12">
                    <PageCombination first={PageInformation.title} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <img className="img-fluid" src="/naynay-int-1.jpg" alt="Nay Nay Interior" />
                </div>
                <div className="col-sm-6">
                    <H2 first={'Hoe'} second={'het begon'} />
                    <p>
                        Een familie met allerlei creatieve kwaliteiten: een opa als kunstschilder, familieleden die goed
                        kunnen tekenen, dichten, zingen, fotograferen, etc. Ik had allerlei ideeën, maar zodra ik aan de
                        uitwerking begon, was het resultaat niet wat ik ervan verwacht had tot ronduit bedroevend.{' '}
                    </p>
                    <p>
                        Het creatieve gedeelte van mijn brein werd tot zwijgen gebracht (met hier en daar een
                        uitspatting) en ik concentreerde me op mijn werk als (programma)manager. De focus op de klant,
                        wat zorgt voor toegevoegde waarde, het leiden van projecten, procesoptimalisatie, het
                        samenwerken als team werden de nieuwe uitdagingen en ontwikkeltrajecten.
                    </p>
                    <p>
                        Door een aantal verhuizingen en de daaraan gekoppelde nieuwe inrichtingen begon mijn creatieve
                        brein opnieuw te ontwaken. Ik volgde een opleiding “Binnenhuisarchitectuur” en kreeg een aantal
                        opdrachten binnen mijn netwerk. Het samen komen tot de verandering, of dat nu een complete
                        verbouwing, het stylen van een woonkamer of enkel een kleuradvies is, zorgt voor wederzijdse
                        energie en maakt je beiden blij……de basis om te werken als interieur designer was gelegd!
                    </p>
                    <H2 first={'De naam Nay Nay'} />
                    <p>
                        Tijdens mijn werk als manager werd het in de loop van de tijd duidelijk dat ik met tijden
                        eigenwijs en onafhankelijk in denken en doen kan zijn. In de periode dat ik bij een grote
                        zorgverzekeraar werkte, had ik een leidinggevende waar het bijzonder goed mee klikte, maar waar
                        ik het niet altijd mee eens was. In onze bilaterale overleggen kreeg ik daardoor de bijnaam Nee
                        Nee oftewel Nay Nay!
                    </p>
                    <p>
                        In je interieur is het eveneens van belang om eigenwijs te zijn en te weten wanneer je Nay Nay
                        moet zeggen. Het gaat uiteindelijk om de plek waar je je moet kunnen ontspannen, waar je tijd
                        met familie en vrienden door kan brengen en waar je je veilig en geborgen voelt. Een interieur
                        dat daarbij past, ongeacht hoe groot of klein de verandering die daarvoor ook nodig is….dat is
                        iets waar ik je graag bij wil helpen!
                    </p>
                </div>
            </div>
        </Container>
    </Layout>
);

export default OverOns;
