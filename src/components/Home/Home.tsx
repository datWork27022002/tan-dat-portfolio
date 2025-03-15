import cx from 'classnames';

import About from './About';
import Perfil from './Perfil';
import Skill from './Skill';
import Info from './Info';

const Home = () => {
    return (
        <section className={cx('section', '')} id="home">
            <div
                className={cx(
                    'container-custom',
                    'grid-custom',
                    'md:!grid-cols-[repeat(2,350px)] md:items-start',
                    'lg:!grid-cols-[280px_560px_280px] lg:!items-stretch',
                )}
            >
                <Perfil />
                <Info />
                <About />
                <Skill />
            </div>
        </section>
    );
};

export default Home;
