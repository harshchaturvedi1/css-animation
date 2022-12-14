import { useEffect, useState } from "react"
import styles from "../styles/main.module.css"


const array = [
    "harsh",
    "chaturvedi",
    "ola",
    'campus',
    "jabalpur"

]

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleCurrentIndex = (value) => {
        console.log('value:', value)

        if (value === "next") {
            currentIndex === array.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
        } else if (value === "prev") {
            currentIndex === 0 ? setCurrentIndex(array.length - 1) : setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(value)
        }
    }

    useEffect(() => {
        console.log("currentIndex", currentIndex)
        let card = document.getElementById("card_" + currentIndex)
        card?.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
        // card.scrollIntoView()
    }, [currentIndex]);

    useEffect(() => {

    }, [currentIndex])
    return <div className={styles.container}>

        <div className={styles.mainWrapper}>
            {

                array.map((e, i) => (
                    <div id={`card_${i}`} className={styles.eachitem} >
                        {e}
                    </div>
                ))

            }

        </div>


        <div className={styles.dotsWrapper}>
            {
                array.map((e, i) => (
                    <div className={` ${styles.dots} ${i === currentIndex && styles.greyDot}`} onClick={() => handleCurrentIndex(i)}></div>
                ))

            }
        </div>
        <div className={styles.nextAndPrev}>
            <div onClick={() => handleCurrentIndex("prev")}>prev</div>
            <div onClick={() => handleCurrentIndex("next")}>next</div>
        </div>
    </div>
}

export default HomePage