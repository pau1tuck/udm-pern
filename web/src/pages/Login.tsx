import React, { useEffect } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginMutation } from "../config/graphql";
import { gql, useApolloClient } from "@apollo/client";

const validationSchema = yup.object().shape({
    ["email"]: yup
        .string()
        .email()
        .min(6)
        .max(30)
        .required()
        .label("This field"),
    ["password"]: yup.string().min(8).max(30).required().label("Password"),
});

export const Login = () => {
    const [Login] = useLoginMutation();
    const { register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    return <div>Hi, Shitstain</div>;
};
