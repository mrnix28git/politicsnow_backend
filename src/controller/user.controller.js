import { User } from "../model/user.model.js";
export const callRequest = async (req, res) => {
    try {
      const { name, phoneNumber, city, description } = req.body;
  
      if (!name || !phoneNumber || !city || !description){
        return res.status(404).json({ message: "All Fields are required" });
      }
       await User.create({
        name,
        phoneNumber,
        city,
        description
      });
  
      res.status(201).json({message: "Call Request Sent Successfully"});
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };