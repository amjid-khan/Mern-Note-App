import User from "../models/user.models.js"
import bcrypt from "bcrypt"

const handleUSer = async (req, res) => {
    let { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({
        name,
        email,
        password: hashedPassword
    })
    res.send({ status: 1, msg: "new user added", result })
}

export { handleUSer }