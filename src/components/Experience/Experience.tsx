import cx from 'classnames';

import MotionWrapper from '../MotionWrapper';
import { experienceData } from '../../constant/data';

const Experience = () => {
    return (
        <section className={cx('section')} id="experience">
            <h2 className={cx('section__title')}>{experienceData.title}</h2>
            <div className={cx('container-custom grid-custom gap-y-8', 'md:!grid-cols-[initial]', 'lg:!gap-y-16')}>
                {experienceData.data.map((value, index) => (
                    <article
                        className={cx(
                            'grid gap-y-4',
                            'md:grid-cols-[320px_380px] md:items-center',
                            'lg:!grid-cols-[350px_510px] lg:!gap-x-32',
                        )}
                        key={index}
                    >
                        <MotionWrapper
                            delay={0.2 * (index + 1)}
                            origin="x"
                            className={cx('text-[length:var(--h2-font-size)]', 'lg:text-[length:var(--h1-font-size)]')}
                        >
                            {value.comapny}
                        </MotionWrapper>
                        <MotionWrapper
                            delay={0.2 * (index + 1)}
                            origin="x"
                            negative
                            className={cx('bg-container-color rounded-3xl p-6', 'lg:rounded-4xl lg:p-8')}
                        >
                            <h3 className={cx('mb-2 text-[length:var(--h3-font-size)]')}>{value.position}</h3>
                            <span className={cx('mb-4 block !text-[length:var(--smaller-font-size)]')}>
                                {value.time}
                            </span>
                            <p className={cx('text-text-color')}>{value.desc}</p>
                        </MotionWrapper>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;
