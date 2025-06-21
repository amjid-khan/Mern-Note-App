import Content from "../models/content.models.js";
import User from "../models/user.models.js";
import bcrypt from "bcrypt";
const handleUSer = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "Email already exists" });
        }
        console.error("Unexpected error during registration:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const handleLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) {
            return res.status(401).json({ message: "Invalid credential" })
        }
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const handleNots = async (req, res) => {
    const { content } = req.body
    try {
        const result = await Content.create({ content })
        res.send({ status: 1, msg: "Notes saved successfully", result })
    } catch (error) {
        res.send("Error while create notes", error)
    }
}

const getAllNotes = async (req, res) => {
    const viewAllnotes = await Content.find()
    res.send({ status: 1, msg: "viewAll", viewAllnotes })
}

const handleDelete = async (req, res) => {
    const id = req.params.id
    try {
        const handleDelete = await Content.deleteOne({ _id: id })
        const result = {
            status: 1,
            msg: "Deleted Note successfully",
            handleDelete
        }
        res.send(result)
    } catch (error) {
        console.log("Error while delte note", error);

    }
}

const handleEdit = async (req, res) => {
    const id = req.params.id
    const { content } = req.body
    try {
        const result = await Content.updateOne({ _id: id }, { $set: { content: content } })
        res.send({ status: 1, msg: "Update successfully", result })
    } catch (error) {
        console.log("Error while updating note", error);

    }
}
export { handleUSer, handleLogin, handleNots, getAllNotes, handleDelete, handleEdit };