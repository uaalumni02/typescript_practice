import mongoose, { Schema } from "mongoose";
// Define the schema
const personalInformationSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    __v: {
        type: Number,
        select: false, // Don't include the version key in query results by default
    },
});
// Create and export the model
const PersonalInformationModel = mongoose.model("MyData", personalInformationSchema);
export default PersonalInformationModel;
