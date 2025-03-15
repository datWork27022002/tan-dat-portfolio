import cx from 'classnames';

import MotionWrapper from '../MotionWrapper';
import { serviceData } from '../../constant/data';

const Service = () => {
    return (
        <section className={cx('section')} id="services">
            <h2 className={cx('section__title')}>{serviceData.title}</h2>
            <div
                className={cx(
                    'container-custom',
                    'grid-custom',
                    'md:!grid-cols-[repeat(2,350px)]',
                    'lg:!grid-cols-[repeat(3,368px)] lg:gap-8',
                )}
            >
                {serviceData.data.map((value, index) => (
                    <MotionWrapper
                        delay={0.2 * (index + 1)}
                        className={cx(
                            'bg-container-color group rounded-4xl pt-16 pr-6 pb-14 pl-6',
                            'lg:pt-24 lg:pb-20',
                        )}
                        key={index}
                    >
                        <div className={cx('relative mb-8 inline-block')}>
                            <div
                                className={cx(
                                    'bg-first-color absolute top-[-1rem] right-[-1rem] h-12 w-12 rounded-full',
                                    'transition-transform duration-[400ms]',
                                    'group-hover:translate-x-[.25rem] group-hover:translate-y-[-.25rem]',
                                    'lg:h-16 lg:w-16 lg:translate-x-[1.5rem] lg:translate-y-[-1.5rem]',
                                )}
                            ></div>
                            <value.Icon className={cx('relative z-(--z-tooltip) text-[2.5rem]')} size={56} />
                        </div>

                        <h3 className={cx('mb-4 text-(length:--h3-font-size)')}>{value.title}</h3>
                        <p className={cx('text-text-color line-clamp-4')} title={value.desc}>
                            {value.desc}
                        </p>
                    </MotionWrapper>
                ))}
            </div>
        </section>
    );
};

export default Service;
