import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserQuery } from "../graphql/graphql";

export const checkAuth = () => {
    const { data, loading } = useUserQuery();
    const router = useRouter();
    useEffect(() => {
        if (!loading && !data?.CurrentUser) {
            router.replace("/login?next=" + router.pathname);
        }
    }, [loading, data, router]);
};
