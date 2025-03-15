import cx from 'classnames';

import MotionWrapper from '../../MotionWrapper';
import { perfilData } from '../../../constant/data';

const Perfil = () => {
    return (
        <MotionWrapper
            className={cx(
                'perfil bg-(image:--conic-gradient)',
                'relative grid h-[415px] overflow-hidden rounded-4xl p-4',
                'md:h-full',
                'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:!p-8',
            )}
        >
            <img
                src={perfilData.img}
                alt="image"
                className={cx('absolute w-[250px] self-end justify-self-center', 'lg:!w-[450px]')}
            />
            <div
                className={cx(
                    'self-end bg-[hsla(0,0%,1%,.1)] backdrop-blur-lg',
                    'px-4 py-6',
                    'rounded-3xl border-2 border-solid border-[hsla(0,0%,100%,.5)]',
                    'lg:w-[370px] lg:rounded-4xl lg:p-6',
                )}
            >
                <h1 className={cx('font-second-font text-(length:--biggest-font-size) font-(--font-regural)')}>
                    {perfilData.firstName} <br /> {perfilData.LastName}
                </h1>
                {/* button */}
                <div className={cx('grid grid-cols-[repeat(2,1fr)] gap-x-2')}>
                    <a href={'#projects'} className={cx('bg-(--first-color) !pt-3 !pr-0 !pb-3 !pl-0', 'button')}>
                        {perfilData.projectBtn}
                    </a>
                    <a href={'#services'} className={cx('bg-(--black-color) !pt-3 !pr-0 !pb-3 !pl-0', 'button')}>
                        {perfilData.serviceBtn}
                    </a>
                </div>
            </div>
        </MotionWrapper>
    );
};

export default Perfil;
