import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";
import { useApolloClient } from "@apollo/client";
import { useLoginMutation } from "../config/graphql";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    const client = useApolloClient();
    const isLoggedIn = checkAuth();
    const [Login] = useLoginMutation();
    const history = useHistory();
    const { register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const onFormSubmit = async (values: any) => {
        const { email, password } = values;
        const response = await Login({
            variables: {
                email,
                password,
            },
        });
        if (response && response.data) {
            client.resetStore();
            console.log(response.data?.Login);
            history.push("/");
        } else console.log(errors);
    };

    useEffect(() => {
        if (isLoggedIn) {
            console.log("Logged in:" + isLoggedIn);
            history.push("/");
        }
    }, []);

    return (
        <div>
            <h1>Sign in</h1>
            <form noValidate onSubmit={handleSubmit(onFormSubmit)}>
                <input name="email" type="email" ref={register} />
                <input name="password" type="password" ref={register} />

                <button type="submit">Sign in</button>
            </form>
        </div>
    );
};
