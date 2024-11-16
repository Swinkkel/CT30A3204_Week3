
function initialize() {

    const addUserButton = document.getElementById("postUser")
    addUserButton.addEventListener("click", async function() {
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value

        const data = await fetch("/users", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name, email})
        })

        const json = await data.json()
        console.log(json)
    })

    const getUsersButton = document.getElementById("getUsers")
    getUsersButton.addEventListener("click", async function() {
        try {
            const response = await fetch('/users') 
            const users = await response.json()
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