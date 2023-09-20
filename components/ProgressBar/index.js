import { motion, useScroll } from "framer-motion"

export default function ProgressBar() {
    const {scrollYProgress} = useScroll()
    return <motion.div style={{ scaleX: scrollYProgress, width: '100%', height: '3px', background: '#F6AA06', transformOrigin: '0%', zIndex: 5 }}></motion.div>
}


