import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import {
    CurrentUserDocument,
    CurrentUserQuery,
    useLoginMutation,
} from "~/config/graphql";
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
        .label("Email address"),
    ["password"]: yup.string().min(8).max(30).required().label("Password"),
});

export const Login = () => {
    const client = useApolloClient();
    const [Login] = useLoginMutation();
    const history = useHistory();
    const { register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const onFormSubmit = async (values: any) => {
        const response: any = await Login({
            variables: values,
            update: (cache, { data }) => {
                cache.writeQuery<CurrentUserQuery>({
                    query: CurrentUserDocument,
                    data: {
                        __typename: "Query",
                        CurrentUser: data?.Login,
                    },
                });
            },
        });
        if (response && response.data) {
            history.push("/");
        } else console.log(errors);
    };

    return (
        <div>
            <h1>Sign in</h1>
            <form noValidate onSubmit={handleSubmit(onFormSubmit)}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    ref={register}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={register}
                />

                <button type="submit">Sign in</button>
            </form>
        </div>
    );
};
