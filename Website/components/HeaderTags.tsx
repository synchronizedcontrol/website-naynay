import ActiveLink from './ActiveLink';
import Ornament from './Ornament';

type headerTagsType = {
    first: string;
    second?: string;
};

export function H1(props: headerTagsType): JSX.Element {
    return (
        <h1>
            <span>{props.first}</span>
            {props.second ? <span>{props.second}</span> : null}
        </h1>
    );
}

export function H2(props: headerTagsType): JSX.Element {
    return (
        <h2>
            <span>{props.first} </span>
            {props.second ? <span>{props.second}</span> : null}
        </h2>
    );
}

export function PageCombination(props: headerTagsType): JSX.Element {
    return (
        <h1 className="text-center">
            <span>{props.first}</span>
            <Ornament class={props.second ? undefined : 'mb-5'} />
            {props.second ? (
                <blockquote className="blockquote">
                    <p className="lead-naynay mt-4">{props.second}</p>
                </blockquote>
            ) : null}
        </h1>
    );
}

export function H2Link(props: headerTagsType): JSX.Element {
    return (
        <h2 className="text-center">
            <ActiveLink href={props.second ? props.second : '/'} activeClassName="active">
                <a className="nav-link text-secondary">{props.first}</a>
            </ActiveLink>
        </h2>
    );
}
