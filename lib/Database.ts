import mongoose from "mongoose";

class Database {
  public static createConnection = async (uri:string) =>{
    try {
      return await mongoose.connect(uri);
    } catch (err) {
      console.log(err);
    }
  }

}

export default Database;
