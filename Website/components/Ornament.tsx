const Ornament = (props: { class?: string }): JSX.Element => (
    <div className={`ornament-naynay ${props.class ? props.class : ''}`}>
        <img className="img-fluid" src="/line.svg" alt="Ornament line" />
        <img className="img-fluid" src="/breaker.svg" alt="Ornament breaker" />
        <img className="img-fluid" src="/line.svg" alt="Ornament line" />
    </div>
);

export default Ornament;
