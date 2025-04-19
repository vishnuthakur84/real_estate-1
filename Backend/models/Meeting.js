// import mongoose from "mongoose";

// const meetingSchema = new mongoose.Schema({
//   buyer: String,
//   seller: String,
//   propertyId: String,
//   date: String,
//   time: String,
// });

// export default mongoose.model("Meeting", meetingSchema);




import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  meetingDate: { type: Date, required: true },
}, { timestamps: true });

const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;
