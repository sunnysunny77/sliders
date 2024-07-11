import open from "open";
await open(`https://${process.env.FQDN}`);
console.log(`running on https://${process.env.FQDN}`);
