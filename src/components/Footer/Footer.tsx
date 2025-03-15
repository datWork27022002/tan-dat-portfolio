import cx from 'classnames';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { footerData } from '../../constant/data';

const Footer = () => {
    return (
        <footer className={cx('pt-8 pb-32', 'lg:p-12 lg:pb-24', '2xl:py-12')}>
            <div
                className={cx(
                    'grid-custom container-custom',
                    'md:!grid-cols-[repeat(2,max-content)] md:!items-center md:!justify-between',
                )}
            >
                <div
                    className={cx(
                        'grid-custom',
                        'md:!grid-cols-[repeat(2,max-content)] md:!items-center md:!gap-x-[72px]',
                    )}
                >
                    <a
                        href={'#'}
                        className={cx(
                            'text-white-color font-second-font text-[length:var(--biggest-font-size)] font-(--font-regular)',
                            'justify-self-center',
                        )}
                    >
                        {footerData.name}
                    </a>
                    {/* links */}
                    <ul className={cx('flex justify-center gap-x-8', 'lg:gap-x-12')}>
                        {footerData.navigations.map((value, index) => (
                            <li key={index}>
                                <a
                                    href={value.url}
                                    className={cx(
                                        'text-white-color transition-colors duration-[400ms]',
                                        'hover:text-text-color',
                                    )}
                                >
                                    {value.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={cx('flex items-center justify-center gap-x-6')}>
                    {footerData.socials.map((value, index) => (
                        <Tippy key={index} content={value.title}>
                            <div>
                                <a
                                    href={value.url}
                                    target="_blank"
                                    className={cx(
                                        'bg-first-color text-white-color h-10 w-10 rounded-full text-2xl',
                                        'grid place-items-center transition-all duration-[400ms]',
                                        'hover:bg-white-color hover:text-black-color',
                                    )}
                                    title={value.title}
                                >
                                    <value.Icon />
                                </a>
                            </div>
                        </Tippy>
                    ))}
                </div>

                <span
                    className={cx(
                        'text-text-color mt-18 block text-center text-[length:var(-small-font-size)]',
                        'lg:col-start-1 lg:col-end-3 lg:mt-28',
                    )}
                >
                    &#169; All Rights Reserved by TanDat
                </span>
            </div>
        </footer>
    );
};

export default Footer;
