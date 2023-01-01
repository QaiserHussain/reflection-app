import mongoose from 'mongoose';

const signupSchema = mongoose.Schema({
    email:{type:String},
    password:{type:String},
    
}
,
{
    timestamps:true
})

export const UserSchema = mongoose.models.signup || mongoose.model('signup', signupSchema);
