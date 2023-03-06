const timeOutPromise = ( time = 1000 ) => {
    new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject( new Error('request timeout'))
        }, time)
    })
}
export default timeOutPromise