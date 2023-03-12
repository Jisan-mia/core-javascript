const teslaCarModule = (() => {
    const name = 'Tesla 3';

    const start = () => {
        console.log('Car has started')
    }
    const stop = () => {
        console.log('Slowing down!')
    }
    const accelerate = () => {
        console.log('Speeding up!')
    }

    return {
        start,
        stop,
        accelerate,
        model: name
    }
})()

teslaCarModule.start();
teslaCarModule.accelerate();