import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCreateTrackMutation } from "~./config/graphql";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Box,
    Center,
    Container,
    Flex,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    FormControl,
    Heading,
    Input,
    InputGroup,
    Stack,
    Text,
    Wrap,
    WrapItem,
    Button,
} from "@chakra-ui/react";

const validationSchema = yup.object().shape({
    ["artist"]: yup.string().required().label("Artist"),
    ["title"]: yup.string().required().label("Title"),
    ["version"]: yup.string().label("Version"),
    ["label"]: yup.string().required().label("Label"),
    ["youTubeId"]: yup.string().required().label("YouTube ID"),
});

export const CreateTrack: React.FC = () => {
    const history = useHistory();

    const [CreateTrack, { error }] = useCreateTrackMutation();
    const { register, errors, handleSubmit, formState } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur",
        reValidateMode: "onSubmit",
    });

    const onFormSubmit = async (values: any) => {
        const response = await CreateTrack({
            variables: {
                input: values,
            },
        });

        if (response && response.data) {
            console.log(response);
            history.push("/");
        }
    };

    return (
        <Flex justifyContent="center" fontWeight="600">
            <Container maxW="600px" margin="10px 10px" overflow="hidden">
                <Heading as="h1" size="lg" textAlign="center" mb={6}>
                    Add Track
                </Heading>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <FormControl isInvalid={errors.name}>
                        <Stack spacing={4}>
                            <Input
                                name="artist"
                                placeholder="Artist"
                                ref={register}
                            />
                            <FormErrorMessage>
                                {errors.artist && errors.artist.message}
                            </FormErrorMessage>
                            <Input
                                name="title"
                                placeholder="Title"
                                autoComplete="off"
                                ref={register}
                            />
                            <FormErrorMessage>
                                {errors.title && errors.title.message}
                            </FormErrorMessage>
                            <Input
                                name="version"
                                placeholder="Version"
                                autoComplete="off"
                                ref={register}
                            />
                            <FormErrorMessage>
                                {errors.version && errors.version.message}
                            </FormErrorMessage>
                            <Input
                                name="label"
                                placeholder="Label"
                                ref={register}
                            />
                            <FormErrorMessage>
                                {errors.label && errors.label.message}
                            </FormErrorMessage>
                            <Input
                                name="youTubeId"
                                placeholder="YouTube ID"
                                autoComplete="off"
                                ref={register}
                            />
                            <FormErrorMessage>
                                {errors.youTubeId && errors.youTubeId.message}
                            </FormErrorMessage>
                        </Stack>
                    </FormControl>
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
