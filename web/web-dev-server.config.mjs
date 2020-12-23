import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
    nodeResolve: true,
    plugins: [
        esbuildPlugin({
            ts: true,
            tsx: true,
            json: true,
            jsxFactory: "React.createElement",
            jsxFragment: "Fragment",
            target: "auto",
        }),
    ],
};
