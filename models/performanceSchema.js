const mongoose = require("mongoose");

const PerformaceSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobKnowledge: {
      type: Number,
    },
    qualityOfWork: {
      type: Number,
    },
    productivity: {
      type: Number,
    },
    communication: {
      type: Number,
    },
    problemSolving: {
      type: Number,
    },

    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    feedback: {
      type: String,
    },
  },
  { timestamps: true }
);

const Performance = mongoose.model("Perfomance", PerformaceSchema);

module.exports = Performance;
