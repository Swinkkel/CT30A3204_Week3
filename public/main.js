
function initialize() {

    const userForm = document.getElementById("userForm")
    userForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const nameElement = document.getElementById("name")
        const name = nameElement.value
        nameElement.value = ""

        const emailElement = document.getElementById("email")
        const email = emailElement.value
        emailElement.value = ""

        const data = await fetch("/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name, email})
        })

        const json = await data.json()
        console.log(json)
    })

    const getUsersButton = document.getElementById("getUsers")
    getUsersButton.addEventListener("click", async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('/users') 
            const usersJson = await response.json()
            const users = usersJson.users

            const userList = document.getElementById('userList')
            userList.innerHTML = '' 
            users.forEach(user => { 
                const listItem = document.createElement('li')
                listItem.textContent = `${user.name} - ${user.email}`
                userList.appendChild(listItem);
            })
        } catch (error) {
            console.error("error:", error)

        }
    })

}

initialize()