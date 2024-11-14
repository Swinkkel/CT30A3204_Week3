import {Request, Response, Router} from "express"

const router: Router = Router()

type TUser = {
    name: string;
    email: string;
}

const users: TUser[] = [];

router.get("/hello", (req: Request, res: Response) => {
    res.json({
        msg: "Hello World!"
    })
})

router.get("/echo/:id", (req: Request, res: Response) => {
    let id: string = req.params.id
    res.json({
        id: id
    })
})

router.post("/sum", (req: Request, res: Response) => {
    const numbers: number[] = req.body.numbers

    const sum = numbers.reduce((acc, num) => acc + num, 0)
    res.json({
        sum
    })
})

router.post("/users", (req: Request, res: Response) => {
    const { name, email} = req.body

    const addUser: TUser = { name, email }
    users.push(addUser);

    res.json({
        message: "User successfully added"
    })

    console.log("Add " + users)
})

router.get("/users", (req: Request, res: Response) => {

    console.log("Get " + users)

    const data = JSON.stringify(users);

    res.status(201).json(data)
})

export default router