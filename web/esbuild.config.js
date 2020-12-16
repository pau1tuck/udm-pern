const { build } = require("esbuild");

const options = {
    entryPoints: ["./src/index.tsx"],
    minify: false,
    bundle: true,
    outfile: "./public/index.js",
};

build(options).catch((err) => {
    process.stderr.write(err.stderr);
    process.exit(1);
});
