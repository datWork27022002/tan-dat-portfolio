'use client';

import classNames from 'classnames';
import { useState, Fragment, useEffect } from 'react';
import { RiArrowUpLine } from '@remixicon/react';
import Tippy from '@tippyjs/react';

const cx = classNames;

function GoToTop() {
    const [isBtnGoToTop, setIsBtnGoToTop] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop } = document.documentElement;
            if (scrollTop > 1000) {
                setIsBtnGoToTop(true);
            } else {
                setIsBtnGoToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            {isBtnGoToTop && (
                <Tippy content="Go to top">
                    <div
                        className={cx(
                            'text-white-color fixed right-8 bottom-[100px] rounded-2xl bg-[hsla(0,0%,98%,.1)] p-[6px]',
                            'flex items-center justify-center',
                            'cursor-pointer transition-all duration-[400ms]',
                            'hover:bg-first-color hover:text-black-color',
                            'md:!bottom-[48px]',
                            '2xl:right-16',
                        )}
                        onClick={goToTop}
                    >
                        <RiArrowUpLine />
                    </div>
                </Tippy>
            )}
        </Fragment>
    );
}

export default GoToTop;
