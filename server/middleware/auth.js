const jwt  = require('jsonwebtoken');
const User = require("../models/userModels.js");

const auth = async(req,res,next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({error:"Authorization error"})
    }

    const token = authorization.split(" ")[1];

    try{
        const { _id } = jwt.verify(token, process.env.SECRET);

        req.user = await User.findById(_id).select("_id");

        next ();
    } catch{
        res.status(401).json({error:error.message});
    }
};

module.export  = { auth };