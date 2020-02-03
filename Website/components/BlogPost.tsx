import React from 'react';
import { NextPage } from 'next';
import { PageCombination, H2Link } from './HeaderTags';

interface BlogPostProps {
    title: string;
    isTip: boolean;
}

const BlogPost: NextPage<BlogPostProps> = props => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <PageCombination first={props.title} />
            </div>
            <div className="row justify-content-md-center mt-4">
                <div className="col-sm-8">
                    <p className="text-center">
                        In je interieur is het van belang om eigenwijs te zijn en te weten wanneer je Nay Nay moet
                        zeggen. Het gaat uiteindelijk om de plek waar je je moet kunnen ontspannen, waar je tijd met
                        familie en vrienden door kan brengen en waar je je veilig en geborgen voelt. Een interieur dat
                        daarbij past, ongeacht hoe groot of klein de verandering die daarvoor ook nodig is….dat is iets
                        waar ik je graag bij wil helpen!
                    </p>
                </div>
            </div>
            <div className="col-sm-12 mt-4">
                <H2Link first="Meer inspiratie nodig?" second="/inspiratie" />
            </div>
        </div>
    );
};

BlogPost.getInitialProps = async ({ req }): Promise<BlogPostProps> => {
    try {
        const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
        return { userAgent };
    } catch (error) {
        const userAgent = 'An error has occured';
        console.log(error);
        return { userAgent };
    }
};

export default BlogPost;
