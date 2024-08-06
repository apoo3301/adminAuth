"use client";

import { type SignupInput, SignupSchema } from "@/validators/signup-validator";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@/hookform/resolvers/valibot"
import React from 'react'


export const SignupForm = () => {
    const form = useForm<SignupInput>({
        resolver: valibotResolver(SignupSchema),
        defaultValues: { name: "", email: "", password: "", confirmPassword: "" }
    });
  return (
    <div>SignupForm</div>
  )
}
