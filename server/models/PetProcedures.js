import mongoose from "mongoose";

const PetProceduresSchema = new mongoose.Schema(
    {
        typeVaccination: {
            type: String,
            required: true,
        },
        dateVaccination: {
            type: Date,
            required: true,
        },
        nameOfVaccine: {
            type: String,
            required: true,
        },
        dateProcedure: {
            type: Date,
            required: true,
        },
        nameOfProcedure: {
            type:String,
            required: true
        },
        nameClinic: {
            type: String,
            required: true,
        },
        userPet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserPet',
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('PetVaccination', PetProceduresSchema)