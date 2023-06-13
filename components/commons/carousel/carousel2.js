import React, { useEffect, useState } from 'react'
import styles from './carousel2.module.scss'
import Card from './card'

const Carousel2 = (props) => {
    const {data, show, infiniteLoop} = props

    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
    const [length, setLength] = useState(data.length)
    
    const [isRepeating, setIsRepeating] = useState(infiniteLoop && data.length > show)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(data.length)
        setIsRepeating(infiniteLoop && data.length > show)
    }, [data, infiniteLoop, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            // children[length - 1 - index]
            // <Card data={data[length - 1 - index]} />
            output.push(<Card data={data[length - 1 - index]} />)
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            //  output.push(children[index])
            output.push(<Card data={data[index]} />)
        }
        return output
    }

    return (
        <div className={styles.carousel_container}>
            <div className={styles.carousel_wrapper}>
                {/* You can alwas change the content of the button to other things */}
                {
                    (isRepeating || currentIndex > 0) &&
                    <button onClick={prev} className={styles.left_arrow}>
                        &lt;
                    </button>
                }
                <div
                    className={styles.carousel_content_wrapper}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`${styles.carousel_content} ${styles[`show_${show}`]}`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / show)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {
                            (length > show && isRepeating) &&
                            renderExtraPrev()
                        }
                        {/* {children} */}
                        {data.map((card,i) =>{
                            return <Card key={i} data={card}  />
                        })}
                        {
                            (length > show && isRepeating) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {
                    (isRepeating || currentIndex < (length - show)) &&
                    <button onClick={next} className={styles.right_arrow}>
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel2