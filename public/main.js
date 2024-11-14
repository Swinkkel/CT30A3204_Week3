
function initialize() {

    const addUserButton = document.getElementById("postUser")

    addUserButton.addEventListener("click", async function() {
        const username = document.getElementById("name")
        const email = document.getElementById("email")

        const data = await fetch("http://localhost:3000/users", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{"username": "'+username+'", "email": "'+email+'"}'
        })

        const json = await data.json()
        console.log(json)
    })

    const getUsersButton = document.getElementById("getUsers")

    getUsersButton.addEventListener("click", async function() {
        try {
            const response = await fetch("http://localhost:3000/users")
            const users = await response.json()

            console.log(users)

            const list = document.getElementById("userList")

            list.innerHTML = ""

            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = `${user.name} - ${user.email}`
                list.appendChild(li)
            })
        } catch (error) {
            console.error("error:", error)

        }
    })

}

initialize()