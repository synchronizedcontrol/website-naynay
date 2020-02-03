import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
    activeClassName: string;
    children: ReactElement;
}

const ActiveLink = (props: ActiveLinkProps): JSX.Element => {
    const router = useRouter();
    const child = React.Children.only(props.children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    const { href } = props;

    return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
