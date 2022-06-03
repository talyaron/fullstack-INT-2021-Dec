async function getData() {
    try {
        const { data } = await axios.get('/send-data')
        const { dataServer } = data

        console.log(dataServer)
    } catch (error) {
        console.log(error)
    }
}