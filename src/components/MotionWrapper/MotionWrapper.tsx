import cx from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

const MotionWrapper = ({
    children,
    className,
    origin = 'y',
    delay = 0.4,
    negative = false,
}: {
    children: React.ReactNode;
    className?: string;
    origin?: 'x' | 'y';
    delay?: number;
    negative?: boolean;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, [origin]: negative ? 60 : -60 }} // Bắt đầu từ vị trí trên và độ mờ 0
            whileInView={{ opacity: 1, [origin]: 0 }} // Kết thúc ở vị trí ban đầu và độ mờ 1
            transition={{
                duration: 1, // Thời gian chuyển tiếp 1000ms
                delay: delay, // Trì hoãn trước khi hoạt ảnh bắt đầu}
            }}
            className={cx({ [className as string]: className })}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
