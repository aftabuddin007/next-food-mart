
export const feedback = [
    {
        id:1,
        message:'food is delitious'
    },
    {
        id:2,
        message:'food is not bad'
    }
]



export async function GET(request){
    return Response.json({
        status:200,
        message:'Api created'
    })
}