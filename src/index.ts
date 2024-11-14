import {Request, Response, Router} from "express"

const router: Router = Router()

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

export default router