import userModel from "../models/userModel.js";

export const adduserController = async (req, res) => {
    try {
        const { id, first_name, last_name, email, gender, avatar, domain, available } = req.body;

        const exisitingUser = await userModel.findOne({ id });
        //check for exisisting user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: "Already exist"
            });
        }
        const user = await new userModel({ id, first_name, last_name, email, gender, avatar, domain, available }).save();
        res.status(201).send({
            success: true,
            message: "User Added Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Adding User",
            error
        });
    }
}

//user list based on page 
export const userListController = async (req, res) => {
    try {
        const perPage = 20;
        const page = req.params.page ? req.params.page : 1;
        const users = await userModel.find({}).skip((page - 1) * perPage).limit(perPage).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error in per page controller",
            error,
        })
    }
}

//user count
export const userCountController = async (req, res) => {
    try {
        const total = await userModel.find({}).estimatedDocumentCount();
        res.status(200).send({
            success: true,
            total,
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "error in userr count",
            error,
        })
    }
}

// Get all users
export const userAllController = async (req, res) => {
    try {
        const users = await userModel.find({}).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            totalCount: users.length,
            message: "All product",
            users,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting users',
            error: error.message
        })

    }
}

//delete users
export const deleteUserController = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        await userModel.deleteOne({ id: id });
        res.status(200).send({
            success: true,
            message: 'User Deleted Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while deleting User',
            error
        })
    }
}

//Update users
export const updateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = req.body;

        const user = await userModel.findOneAndUpdate({ id: id }, updatedUser, { new: true });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        });
    }
}

