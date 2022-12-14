import { useEffect, useState } from "react"
import styles from "../styles/main.module.css"


const array = [
    "harsh",
    "chaturvedi",
    "ola",
    'campus'

]

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleCurrentIndex = (value) => {
        if (value === 1) {
            currentIndex === array.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
        } else if (value === -1) {
            currentIndex === 0 ? setCurrentIndex(array.length - 1) : setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(value)
        }
    }

    useEffect(() => {
    }, [currentIndex]);

    useEffect(() => {

    }, [currentIndex])
    return <div className={styles.container}>

        <div className={styles.mainWrapper}>
            {

                array.map((e, i) => (
                    <div className={styles.eachitem} >
                        {e}
                    </div>
                ))

            }

        </div>


        <div className={styles.dotsWrapper}>
            {
                array.map((e, i) => (
                    <div className={styles.dots} onClick={() => handleCurrentIndex(i)}></div>
                ))

            }
        </div>
        <div className={styles.nextAndPrev}>
            <div onClick={() => handleCurrentIndex(-1)}>prev</div>
            <div onClick={() => handleCurrentIndex(1)}>next</div>
        </div>
    </div>
}

export default HomePage