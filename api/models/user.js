module.exports = mongoose => {
    const user = mongoose.model("User", new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    }));
    return user;
};