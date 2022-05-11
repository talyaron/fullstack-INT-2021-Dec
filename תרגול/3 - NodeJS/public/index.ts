// "use strict"

// x = 1;
async function get() {
    // console.log('one')
    const { data } = await axios.get('/api/user2')
    const { user } = data //const user = data.user

    // const day = data.day

    console.log(data)
    console.log(user)
    // console.log(user.name)
    // console.log('two')
}

let y = 0;

while (y < 5) {
    y++
}

/*
egiuegorgiojig
krnok ergne ng 
kl nkl en lnk 
ghnj htjktk
*/

console.log(navigator)