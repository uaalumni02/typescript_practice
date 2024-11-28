import mongoose, { Schema, Document, Model } from "mongoose";

// Define an interface for the document
interface IPersonalInformation extends Document {
  name: string;
  __v?: number;  // Optional, as it's automatically handled by Mongoose
}

// Define the schema
const personalInformationSchema: Schema<IPersonalInformation> = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  __v: {
    type: Number,
    select: false,  // Don't include the version key in query results by default
  },
});

// Create and export the model
const PersonalInformationModel: Model<IPersonalInformation> = mongoose.model<IPersonalInformation>("MyData", personalInformationSchema);

export default PersonalInformationModel;
