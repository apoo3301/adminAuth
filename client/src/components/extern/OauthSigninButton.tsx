"use client"

import { IconBrandGoogleFilled } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { AppleIcon } from "lucide-react"
import { oauthSigninAction } from "@/actions/oauth-signin-action"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

type OauthSigninButtonProps = {
    signup?: boolean
}

export const OauthSigninButton = ({signup}: OauthSigninButtonProps) => {
    const [errMessage,setErrMessage] = useState("");
    const searchParams = useSearchParams();
    const error = searchParams.get("error");
    
    useEffect(() => {
        if (!error) return;
        if (error == "OAuthAccountNotLinked") {
            setErrMessage("Your account is not linked to any OAuth account. Please sign in with your email and password.")
        } else {
            setErrMessage("An error occurred while signing in. Please try again.")
        }
    }, [error])

    const clickHandler = async (provider: "google") => {
        await oauthSigninAction(provider)
    }
    const text = signup ? 'Sign up' : 'Sign in'
    return (
        <div className="max-w-[400px]">
            <Button variant='outline' className="w-full" onClick={clickHandler.bind(null, "google")}>
                <IconBrandGoogleFilled className="mr-2" />
                {text} with Google
            </Button>
            {errMessage && <p className="text-red-500 text-sm mt-2">{errMessage}</p>}
            {/* <Button variant='outline' className="mt-2 w-full" onClick={clickHandler}>
                <AppleIcon className="mr-2" />
                {text} with Apple
            </Button> */}
        </div>
    )
}

type OauthSigninButtosSkeletonProps = OauthSigninButtonProps

export const OauthSigninButtosSkeleton = ({signup}: OauthSigninButtosSkeletonProps) => {
    const text = signup ? 'Sign up' : 'Sign in'
    return (
        <div className="max-w-[400px]">
        <Button variant='outline' className="w-full">
            <IconBrandGoogleFilled className="mr-2" />
            {text} with Google
        </Button>
            {/* <Button variant='outline' className="mt-2 w-full" onClick={clickHandler}>
            <AppleIcon className="mr-2" />
            {text} with Apple
            </Button> */}
    </div>
    )
}