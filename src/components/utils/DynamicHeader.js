const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

const motionHandler = () => {
    const effects = [ "center","top", "left", "bottom", "right"]
    const size = effects.length
    let styleCount = getRandomInt(size+1)
    document.querySelector('.header-card').style.backgroundPosition = effects[styleCount]
}

const dynamicHeader = () => {
    setInterval(() => {motionHandler()}, 3000)      // Executes every 3s
}

export default dynamicHeader