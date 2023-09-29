function onMounted () {
    // because this will get evaluated client-side, we have access to vue/this
    const vue = this
    console.log('this widget has mounted')
}

function onInput (msg) {
    // because this will get evaluated client-side, we have access to vue/this
    const vue = this
    console.log('custom onInput handler:')
    console.log(msg)
}

function test () {
    // because this will get evaluated client-side, we have access to vue/this
    const vue = this
    console.log('custom event handler:')
    console.log(vue.$socket.emit('my-custom-event', this.id, {
        payload: "Test"
    }))
}

module.exports = {
    test,
    onInput,
    onMounted
}