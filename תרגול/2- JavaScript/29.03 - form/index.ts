const root = document.querySelector('.root')

interface User {
    username: string
    password: string
    hobbies?: string
}

const users: Array<User> = [
    { username: "Dorit", password: "123" }
];

function hendleReg(e) {
    e.preventDefault();

    console.log(e)
    const username = e.target.children.userName.value
    const password = e.target.children.password.value
    const confirmPassword = e.target.children.confirmPassword.value

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            console.log('exist')
        } else {
            console.log('not exist')
            if (password === confirmPassword) {
                console.log('pass the same')
            } else {
                console.log(`pass not the same`)
            }
        }
    }

    users.push({ username, password })

    console.log(users)
}

function hendleLogin(e) {
    e.preventDefault();

    try {
        const username = e.target.children.userName.value
        const password = e.target.children.password.value

        console.log(username, password)

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                console.log('hi')

                root.innerHTML = `
                <h1>
                    hi
                </h1>
                `
            } else {
                root.innerHTML = `
                <h1>
                    User not found
                </h1>
                `
            }
        }

    } catch (error) {
        console.log(error)
    }

}