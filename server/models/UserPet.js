import mongoose from "mongoose";

const UserPetSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            required: true,
        },
        petBreed: {
            type: String,
            required: true,
        },
        agePet: {
            type: String,
            required: true,
        },
        petGender: {
            type: String,
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        procedures: [
            {
                typeVaccination: String,
                dateVaccination: Date,
                nameOfVaccine: String,
                dateProcedure: Date,
                nameOfProcedure: String,
                nameClinic: String,
            }//нужно тестить
        ],

        petAvatarUrl: String,

        petPersonalCard: String,

    },
    {
        timestamps: true,
    }
)

export default mongoose.model('UserPet', UserPetSchema)