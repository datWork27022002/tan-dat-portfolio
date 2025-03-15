import cx from 'classnames';
import { RiLinksFill } from '@remixicon/react';

import { projectData } from '../../constant/data';
import MotionWrapper from '../MotionWrapper';

const Project = () => {
    return (
        <section className={cx('section')} id="projects">
            <h2 className={cx('section__title')}>{projectData.title}</h2>
            <div
                className={cx(
                    'container-custom',
                    'grid-custom',
                    'md:!grid-cols-[repeat(2,350px)]',
                    'lg:!grid-cols-[repeat(3,368px)] lg:gap-8',
                )}
            >
                {projectData.data.map((value, index) => (
                    <MotionWrapper
                        delay={0.2 * (index + 1)}
                        className={cx('bg-container-color group rounded-4xl p-6', 'lg:pb-8')}
                        key={index}
                    >
                        <a href={'#'} className={cx('mb-5 block overflow-hidden rounded-3xl')}>
                            <img
                                src={value.image}
                                alt={'image'}
                                className={cx(
                                    '!h-[200px] object-cover transition-transform duration-[400ms]',
                                    'group-hover:scale-[1.2]',
                                )}
                            />
                        </a>
                        <div className={cx('data')}>
                            <h3 className={cx('mb-2 text-(length:--h3-font-size)')}></h3>
                            <p className={cx('text-text-color mb-6 line-clamp-4 h-[96px]')} title={value.desc}>
                                {value.desc}
                            </p>
                            <div
                                className={cx(
                                    'bg-black-color mb-6 flex h-[34px] w-max flex-wrap items-center gap-3 rounded-[64px] px-3',
                                )}
                            >
                                {value.skills.map((value, index) => (
                                    <img
                                        alt="image"
                                        key={index}
                                        src={value}
                                        className={cx(
                                            'w-4 transition-all duration-[400ms]',
                                            'hover:translate-y-[-0.25rem]',
                                        )}
                                    />
                                ))}
                            </div>
                            <a
                                href={value.url}
                                className={cx(
                                    'text-white-color inline-flex items-center gap-x-2 transition-colors duration-[400ms]',
                                )}
                            >
                                <RiLinksFill className="text-xl" />
                                <span className={cx('text-text-color')}>Visit Project</span>
                            </a>
                        </div>
                    </MotionWrapper>
                ))}
            </div>
        </section>
    );
};

export default Project;
