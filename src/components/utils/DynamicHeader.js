const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

const dynamicHeader = () => {
    const effects = [ "center","top", "left", "bottom", "right"]
    const size = effects.length
    setInterval(() => {
        let styleCount = getRandomInt(size+1)
        document.querySelector('.header-card')
            .style.backgroundPosition = effects[styleCount] 
    }, 3000)
}

export default dynamicHeader