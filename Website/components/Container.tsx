import { ReactElement } from 'react';

type containerPropsInt = {
    children: ReactElement | ReactElement[];
};

export default function Container(props: containerPropsInt): JSX.Element {
    return <div className="container pt-5">{props.children}</div>;
}
