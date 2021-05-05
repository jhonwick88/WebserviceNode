module.exports = mongoose => {
    const role = mongoose.model("Role", new  mongoose.Schema({
        name: String
    }));
    return role;
};