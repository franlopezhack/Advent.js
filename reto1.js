const gifts = ['cat', 'game', 'socks']



function wrapping(gifts){
    return gifts.map((gift) => {
        let len = gift.length + 2;
        let asterisco = "*".repeat(len)
        return `${asterisco}\n${"*"+gift+"*"}\n${asterisco}`
    })
}





const wrapped = wrapping(gifts)



console.log(wrapped)