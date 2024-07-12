import phpServer from "php-server";

const server = await phpServer({
    port: 4000,
    base: "./site"  
});
console.log(`PHP server running at ${server.url}`);