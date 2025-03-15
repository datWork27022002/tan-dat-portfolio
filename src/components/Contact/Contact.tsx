import cx from 'classnames';
import { useState } from 'react';

import MotionWrapper from '../MotionWrapper';
import { contactData } from '../../constant/data';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const inputStyle = cx(
        'bg-container-color text-white-color rounded-[64px] p-5  placeholder:text-text-color ',
        'autofill:duration-[6000ms] autofill:transition-all',
    );

    const handeChange = (value: string, key: string) => {
        const newData = { ...formData, [key]: value };
        setFormData(newData);
    };

    const handeSendEmail = () => {
        console.log(formData);
    };

    return (
        <section className={cx('section')} id="contact">
            <h2 className={cx('section__title')}>{contactData.title}</h2>
            <div className={cx('container-custom', 'grid-custom', 'gap-y-8', 'lg:!grid-cols-[620px]')}>
                <form className={cx('grid-custom', 'relative !gap-4')}>
                    <MotionWrapper className={cx('grid-custom', '!gap-4', 'lg:!grid-cols-[repeat(2,1fr)]')}>
                        <input
                            name="name"
                            type=""
                            placeholder="Names"
                            required
                            className={cx(inputStyle)}
                            value={formData?.name}
                            onChange={(e) => handeChange(e?.target.value, 'name')}
                        />
                        <input
                            name="email"
                            type=""
                            placeholder="Email"
                            required
                            className={cx(inputStyle)}
                            value={formData?.email}
                            onChange={(e) => handeChange(e?.target.value, 'email')}
                        />
                    </MotionWrapper>
                    <MotionWrapper>
                        <textarea
                            name="message"
                            placeholder="Message"
                            className={cx(inputStyle, 'h-[160px] w-full resize-none !rounded-3xl', 'lg:h-60')}
                            value={formData?.message}
                            onChange={(e) => handeChange(e?.target.value, 'message')}
                        ></textarea>
                    </MotionWrapper>
                    <MotionWrapper negative className={cx('justify-self-center')}>
                        <button
                            className={cx(
                                'button',
                                'bg-first-color mt-6 cursor-pointer',
                                'justify-self-center lg:w-max',
                            )}
                            type="button"
                            onClick={handeSendEmail}
                        >
                            {contactData.sendBtn}
                        </button>
                    </MotionWrapper>
                </form>
            </div>
        </section>
    );
};

export default Contact;
