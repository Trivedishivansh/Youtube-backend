import mongoose,{Schema} from "mongoose"
import mongooseAggregatePagine from "mongoose-aggregate-paginate-v2"


const commentSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    video:{
        type: Schema.Types.ObjectId,
        ref: "Video",
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
},
{ timestamps: true}
)

commentSchema.plugin(mongooseAggregatePagine)
export const comment = mongoose.model("comment",commentSchema)