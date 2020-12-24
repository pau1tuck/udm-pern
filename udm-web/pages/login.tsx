import React from "react";
import { useRouter } from "next/router";
import { useLoginMutation, UserQuery, UserDocument } from "../graphql/graphql";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Button,
    Container,
    Flex,
    FormErrorMessage,
    FormControl,
    Heading,
    Input,
    Stack,
} from "@chakra-ui/react";
import { withApollo } from "../utils/withApollo";

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

const Login = () => {
    const router = useRouter();
    const [Login] = useLoginMutation();

    const { register, handleSubmit, errors, control, formState } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const onFormSubmit = async (values: any) => {
        const response: any = await Login({
            variables: values,
            update: (cache, { data }) => {
                cache.writeQuery<UserQuery>({
                    query: UserDocument,
                    data: {
                        __typename: "Query",
                        CurrentUser: data?.Login,
                    },
                });
            },
        });
        if (response.data?.Login) {
            router.push("/");
        } else console.log(errors);
    };

    return (
        <Flex justifyContent="center" fontWeight="600">
            <Container maxW="600px" margin="10px 10px" overflow="hidden">
                <Heading as="h1" size="lg" textAlign="center" mb={6}>
                    Sign In
                </Heading>
                <form noValidate onSubmit={handleSubmit(onFormSubmit)}>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.email}>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="email"
                                ref={register}
                            />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.password}>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                autoComplete="password"
                                ref={register}
                            />
                            <FormErrorMessage>
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Stack>
                    <Button
                        width="100%"
                        mt={8}
                        colorScheme="blue"
                        isLoading={formState.isSubmitting}
                        type="submit"
                    >
                        SUBMIT
                    </Button>
                </form>
            </Container>
        </Flex>
    );
};

export default withApollo({ ssr: false })(Login);
