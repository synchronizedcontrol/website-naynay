import Ornament from './Ornament';

const Jumbotron = (props: { children?: JSX.Element; backDrop: string }): JSX.Element => {
    return (
        <div
            className={`jumbotron jumbotron-fluid jumbotron-naynay pt-5 pb-5`}
            style={{ backgroundImage: `url(${props.backDrop})` }}
        >
            {props.children ? (
                <div className={`container-naynay pt-5 pb-5`}>
                    <Ornament />
                    {props.children}
                </div>
            ) : null}
        </div>
    );
};

export default Jumbotron;
