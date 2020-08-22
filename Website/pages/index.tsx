import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { PageCombination, H2 } from '../components/HeaderTags';
import '../assets/styles/styles.scss';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

const PageInformation = {
    title: 'It is wise to know when to say {naynay}!',
};

interface BlogPostProps {
    title: string;
    isTip: boolean;
    html: string;
    imageUrl: string;
}

const Home: NextPage<BlogPostProps> = props => (
    <Layout pageTitle={PageInformation.title}>
        <Jumbotron backDrop="/background_banner.jpg" />
        <Container>
            <div className="row">
                <div className="col-sm-12">
                    <PageCombination first={PageInformation.title} />
                </div>
            </div>
            <div className="row justify-content-md-center mt-4">
                <div className="col-sm-8">
                    <p className="text-center">
                        In je interieur mag je eigenwijs zijn en moet je weten wanneer je{' '}
                        <span className="naynay">Nay Nay</span> moet zeggen.
                        <br />
                        Het gaat uiteindelijk om de plek waar je je moet kunnen ontspannen, waar je tijd met familie en
                        vrienden door kan brengen en waar je je veilig en geborgen voelt. <br />
                        Een interieur dat daarbij past, ongeacht hoe groot of klein de verandering die daarvoor ook
                        nodig is….dat is iets waar ik je graag bij wil helpen!
                    </p>
                </div>
                <div className="col-sm-8 mt-4 text-center">
                    <H2 first="Meer weten?" />
                    <p className="text-center">
                        Klik op een van de links in het menu of neem contact op via het contactformulier!
                    </p>
                </div>
                <div className="col-sm-12 mt-4">{/* <BlogPost {...props} /> */}</div>
            </div>
        </Container>
    </Layout>
);

// Home.getInitialProps = async (): Promise<BlogPostProps> => {
//     try {
//         const res = await fetch('http://localhost:9000/latest-weektip');
//         const data = await res.json();

//         return data;
//     } catch (error) {
//         console.log(error);
//         return Promise.reject();
//     }
// };

export default Home;
