import mongoose from "mongoose";

class Database {
  private MONGO_URI: string;
  private connection: typeof mongoose | null = null;

  constructor(uri: string) {
    this.MONGO_URI = uri;
    if(!this.MONGO_URI)
        throw new Error("uri it's not defined")

    this.connectDatabase();
  }


  //connecto to the database
  private async connectDatabase() {
    try {
      this.connection = await mongoose.connect(this.MONGO_URI);
    } catch (err) {
      console.log(err);
    }
  }

  public getConnection(){
    return this.connection as typeof mongoose;
  }
}

export default Database;
