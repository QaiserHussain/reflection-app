import mongoose from 'mongoose';

const connect = async () => {
    try {
         mongoose.set("strictQuery", false);
         await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
            console.log('connected');
        })
    } catch (error) {
        console.log(error);
    }
}
export default connect;