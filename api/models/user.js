module.exports = mongoose => {
    const user = mongoose.model("User", new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        provider: {
            type: String,
            default: null,
        },
        providerId: {
            type: String,
            default: null,
        },
        roles:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    }));
    return user;
};