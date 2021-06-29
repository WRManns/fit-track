// Dependency on the workout model
const Workout = require("../models/workout")

module.exports = function (app) {
    //Get function for the workout
    app.get("/api/workouts", function(req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });
    //Post function for the workouts
    app.post("/api/workouts", function(req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
    //Allows the updating of the DB of new workouts
    app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body}},
            { new: true, runValidators: true}
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
}