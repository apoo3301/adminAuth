"use client"

import { IconBrandGoogleFilled } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { AppleIcon } from "lucide-react"
import { oauthSigninAction } from "@/actions/oauth-signin-action"

type OauthSigninButtonProps = {
    signup?: boolean
}

export const OauthSigninButton = ({signup}: OauthSigninButtonProps) => {
    const text = signup ? 'Sign up' : 'Sign in'
    const clickHandler = async (provider: "google") => {
        await oauthSigninAction(provider)
    }
    return (
        <div className="max-w-[400px]">
            <Button variant='outline' className="w-full" onClick={clickHandler.bind(null, "google")}>
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