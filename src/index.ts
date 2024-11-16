import {Request, Response, Router} from "express"
import { TUser} from '../types/TUser'

const router: Router = Router()

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
})

router.get("/users", (req: Request, res: Response) => {
    res.status(201).json(users)
})

export default router