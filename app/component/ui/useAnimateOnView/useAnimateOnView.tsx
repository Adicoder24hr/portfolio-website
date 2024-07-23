import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useAnimateOnView = (options = {}) => {
    const { ref, inView } = useInView(options);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(inView);
    }, [inView]);

    return { ref, animate };
};

export default useAnimateOnView;
