import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const protectRoute = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        if(decoded){
            const userID = decoded.userID;
            req.body.userID = userID;
            next ( );
        }

        else{
            res.status(400).send({"message" : "User Not Found, Try Logging In"})
        }
    }
    else{
        res.status(400).send({"message" : "User Not Found, Try Logging In"})
    }
};