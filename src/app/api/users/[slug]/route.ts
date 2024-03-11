import { User } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (request: Request, { params }: {params: {slug: string}}) => {
    const {slug} = params

    try{
        connectToDb()
        const user = await User.findById(slug)
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        throw new Error("Something Went Wrong")
    }

}