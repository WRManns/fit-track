//Model dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Building the Schema for the workouts
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of excercise"
            },
        name: {
            type: String,
            trim: true,
            required: "Enter a name of the excercise"
        },
        duration: {
            type: Number,
            required: "Enter, in minutes, the duration of the excercise"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
        }
    ]
    },
    {
        toJSON:{
        virtuals: true
        }
    }
);

//Allows for the dynamic updating of the excercises/workouts
//And adds onto the total workout stats
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
//Gotta export it if you wanna use it
module.exports = Workout;