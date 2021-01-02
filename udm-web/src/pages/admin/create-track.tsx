import React, { useState } from "react";
import { useRouter } from "next/router";
import { useCreateTrackMutation } from "../../graphql/graphql";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../../components/layout";
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
import { withApollo } from "../../utils/with-apollo";

interface ITrack {
    artist: string;
    title: string;
    version: string;
    label: string;
    image: string;
    trackUrl: string;
    buyUrl: string;
}

const validationSchema = yup.object().shape({
    ["artist"]: yup.string().required().label("Artist"),
    ["title"]: yup.string().required().label("Title"),
    ["version"]: yup.string().label("Version"),
    ["label"]: yup.string().label("Label"),
    ["image"]: yup.string().label("Image"),
    ["trackUrl"]: yup.string().required().label("Track Location"),
    ["buyUrl"]: yup.string().label("Buy URL"),
});

const CreateTrack = () => {
    const router = useRouter();

    const [CreateTrack, { error }] = useCreateTrackMutation();
    const { register, errors, handleSubmit, formState } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur",
        reValidateMode: "onSubmit",
    });

    const onFormSubmit = async (values: ITrack) => {
        const { errors } = await CreateTrack({
            variables: { input: values },
            update: (cache) => {
                cache.evict({ fieldName: "tracks:{}" });
            },
        });
        if (!errors) {
            console.log("Success!");
            router.push("/");
        }
    };

    return (
        <Layout>
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
                                    name="image"
                                    placeholder="Image"
                                    ref={register}
                                />
                                <FormErrorMessage>
                                    {errors.image && errors.image.message}
                                </FormErrorMessage>
                                <Input
                                    name="trackUrl"
                                    placeholder="Location"
                                    autoComplete="off"
                                    ref={register}
                                />
                                <FormErrorMessage>
                                    {errors.trackUrl && errors.trackUrl.message}
                                </FormErrorMessage>
                                <Input
                                    name="buyUrl"
                                    placeholder="Buy URL"
                                    autoComplete="off"
                                    ref={register}
                                />
                                <FormErrorMessage>
                                    {errors.buyUrl && errors.buyUrl.message}
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
        </Layout>
    );
};

export default withApollo({ ssr: false })(CreateTrack);
