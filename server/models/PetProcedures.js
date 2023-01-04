import mongoose from "mongoose";

const PetProceduresSchema = new mongoose.Schema(
    {
        typeVaccination: {
            type: String,
        },
        dateVaccination: {
            type: Date,
        },
        nameOfVaccine: {
            type: String,
        },
        dateProcedure: {
            type: Date,
        },
        nameOfProcedure: {
            type: String,
        },
        nameClinic: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('PetProcedures', PetProceduresSchema)