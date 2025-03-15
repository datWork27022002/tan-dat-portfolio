import cx from 'classnames';
import { infoData } from '../../../constant/data';
import MotionWrapper from '../../MotionWrapper';

const Info = () => {
    return (
        <MotionWrapper
            className={cx(
                'bg-container-color rounded-4xl pt-8 pr-6 pb-8 pl-6',
                'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2',
            )}
            origin="x"
        >
            <div className={cx('flex items-center justify-center gap-x-2')}>
                <div className={cx('bg-first-color h-8 w-8 rounded-full')}></div>
                <h1
                    className={cx(
                        'font-second-font font(--font-regular) text-[length:var(--h1-font-size)]',
                        'lg:text-[length:var(--h2-font-size)]',
                    )}
                >
                    {infoData.name}
                </h1>
            </div>
            <div className={cx('my-6 grid h-[180px] overflow-hidden rounded-4xl bg-(image:--conic-gradient)')}>
                <img alt="image" src={infoData.img} className={cx('w-[250px] self-end justify-self-center')} />
            </div>
            <div className={cx('mb-8 font-(height:--small-font-size)')}>{infoData.desc}</div>
            <a href={infoData.CV} className={cx('button', 'bg-first-color w-full')} target="_blank" download>
                {infoData.downloadCVBtn}
            </a>
        </MotionWrapper>
    );
};

export default Info;
