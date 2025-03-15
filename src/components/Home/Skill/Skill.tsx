import cx from 'classnames';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import MotionWrapper from '../../MotionWrapper';
import { skillData } from '../../../constant/data';

const Skill = () => {
    return (
        <MotionWrapper className={cx('lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3')} origin="x" delay={0.6}>
            <h2 className={cx('lg:text-[length:var(--h3-font-size)]')}>{skillData.title}</h2>
            <div className={cx('my-6 flex flex-wrap items-center gap-6')}>
                {skillData.data.map((value, index) => (
                    <div key={index}>
                        <Tippy content={value.title}>
                            <div>
                                <img
                                    alt="image"
                                    src={value.image}
                                    title={value.title}
                                    className={cx(
                                        'w-6 transition-all duration-[400ms]',
                                        'hover:translate-y-[-0.25rem]',
                                    )}
                                />
                            </div>
                        </Tippy>
                    </div>
                ))}
            </div>
            <p className={cx('text-(length:--small-font-size)')}>{skillData.note}</p>
        </MotionWrapper>
    );
};

export default Skill;
