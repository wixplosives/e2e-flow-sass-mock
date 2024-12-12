import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import { useState } from 'react';
import { Avatar } from '~/components/avatar/avatar';
import { NoStyleSheet } from '~/components/no-style-sheet/no-style-sheet';
import * as Label from '@radix-ui/react-label';

interface HomePageProps {
    header?: string;
    color?: string;
    options?: string[];
}

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage({ header, color, options }: HomePageProps) {
    const [isChecked, setIsChecked] = useState(false);

    const returnOptions = (options: string[]) => {
        return options.map((item: string) => {
            return (
                <div key={item}>
                    <input type="radio" id={item} />
                    <label htmlFor={item}>option {item}</label>
                </div>
            );
        });
    };

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.App} style={{ backgroundColor: color || 'lightBlue' }}>
            <h1 className={classNames(styles.A, styles.B, styles.C, styles.D, styles.E, styles.F)}>
                {header || 'Header'}
            </h1>
            <Avatar
                image={'https://avatars.githubusercontent.com/u/67858097?v=4'}
                title={'Sagiv Dayan'}
                subtitle={'@thealmightycrumb'}
                children={<div></div>}
            ></Avatar>
            <div></div>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
            <div className={styles.yellowCircleContainer}>
                <NoStyleSheet />
            </div>
            <div>
                <div className={classNames(styles.radioButtonContainer, styles.radioButtonsDiv)}>
                    {returnOptions(options || ['A', 'B', 'C'])}
                </div>
                <div className={styles.checkboxDiv}>
                    <input
                        type="checkbox"
                        id="termsCheckbox"
                        name="subscribe"
                        onClick={toggleCheckBox}
                    />
                    <label htmlFor="termsCheckbox">
                        I accept the terms of use, and aggree to share all my data
                    </label>
                </div>
            </div>
            <div style={{ color: 'red' }}>
                {isChecked ? (
                    <button className={styles.enable}>Enter</button>
                ) : (
                    <span>To continue, you need to agree to the term</span>
                )}
            </div>
            <Label.Root>I'm a label</Label.Root>
            <div>
                <label htmlFor="mainInput">Enter your name below</label>
                <div>
                    <input id="mainInput" />
                </div>
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
