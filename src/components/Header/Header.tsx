import cx from 'classnames';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { headerMenu } from '../../constant/data';

const Header = () => {
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            setSelectedItem(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Dọn dẹp listener khi component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        setSelectedItem(window.location.hash);
    }, []);

    return (
        <nav
            className={cx(
                'fixed right-0 bottom-6 left-0 mx-auto w-[88%] bg-[hsla(0,0%,98%,.1)]',
                'z-[var(--z-fixed)] rounded-2xl p-4 backdrop-blur-lg',
                'sm:px-4 sm:py-2',
                'xs:w-max',
                '2xl:top-0 2xl:right-12 2xl:bottom-0 2xl:left-[initial] 2xl:h-max 2xl:w-max 2xl:px-4 2xl:py-8',
                '2xl:my-auto',
            )}
        >
            <ul className={cx('flex items-center justify-between', 'sm:gap-x-5', '2xl:flex-col 2xl:gap-5')}>
                {headerMenu.map((value, index) => (
                    <li
                        title={value.title}
                        key={index}
                        className={cx(
                            'text-white-color h-10 w-10 rounded-full bg-transparent text-2xl',
                            'grid place-items-center transition-all duration-500',
                            'hover:!bg-first-color',
                            selectedItem.includes(value.url) && '!bg-first-color',
                        )}
                    >
                        <Tippy content={value.title}>
                            <div>
                                <a href={value.url}>
                                    <value.Icon />
                                </a>
                            </div>
                        </Tippy>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
