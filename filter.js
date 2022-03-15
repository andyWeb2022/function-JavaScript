const getShortMessages = (messages) =>{
    let array=[]
    array = messages.filter(text=> text.message.length < 50)
    return array.map(result =>result.message)
}
module.exports = getShortMessages
