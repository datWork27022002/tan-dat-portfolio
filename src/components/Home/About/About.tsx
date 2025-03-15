import cx from 'classnames';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import MotionWrapper from '../../MotionWrapper';
import { aboutSocialData, aboutDesc } from '../../../constant/data';

const About = () => {
    return (
        <MotionWrapper
            negative
            origin="x"
            className={cx(
                'bg-container-color rounded-4xl !px-6 !py-8',
                'items-center lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3',
            )}
        >
            <h3 className={cx('mb-4 text-(length:--normal-font-size) font-(--font-regular)')}>
                {aboutDesc.name} - <b>{aboutDesc.postion}</b>
            </h3>
            <p>{aboutDesc.profileDesc}</p>
            <div className={cx('my-8 flex justify-center gap-x-6')}>
                {aboutSocialData.map((value, index) => (
                    <div key={index}>
                        <Tippy content={value.title}>
                            <div>
                                <a
                                    href={value.url}
                                    target="_blank"
                                    className={cx(
                                        'bg-white-color text-black-color h-10 w-10 rounded-full text-2xl',
                                        'grid place-items-center transition-all duration-[400ms]',
                                        'hover:bg-first-color hover:text-white-color',
                                    )}
                                    title={value.title}
                                >
                                    <value.Icon />
                                </a>
                            </div>
                        </Tippy>
                    </div>
                ))}
            </div>
            <div
                className={cx('grid h-[180px] overflow-hidden rounded-4xl bg-(image:--conic-gradient)', 'lg:h-[210px]')}
            >
                <img
                    alt="image"
                    src={aboutDesc.img}
                    className={cx('w-[250px] justify-self-center', 'translate-y-[-40px]', 'lg:translate-y-[-1rem]')}
                />
            </div>
            <p className={cx('mt-4 mb-8 text-(length:--small-font-size)')}>{aboutDesc.note}</p>
            <a href={''} className={cx('button', 'bg-first-color w-full')}>
                {aboutDesc.contactBtn}
            </a>
        </MotionWrapper>
    );
};

export default About;
