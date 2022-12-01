const mongoose = require("mongoose");

const District = mongoose.Schema({
    city: String,
    uc: String,
    area: Number,
    shape_area: Number,
    geometry: [Number],
    years: [
        {
            year: String,
            sum: Number,
            activations: [],
            sum_per_area: Number,
            sum_per_shape_area: Number,
        }
    ]
});

module.exports = mongoose.model("District", District);
