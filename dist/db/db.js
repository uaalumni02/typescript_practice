class Db {
    static async addPesornalData(model, data) {
        try {
            const newPriority = await model({ ...data });
            return newPriority.save();
        }
        catch (error) {
            throw error;
        }
    }
    static async getAllData(model) {
        try {
            const allPriorities = await model.find({});
            return allPriorities;
        }
        catch (error) {
            throw error;
        }
    }
}
export default Db;
