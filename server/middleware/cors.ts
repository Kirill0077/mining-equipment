export default defineEventHandler((event) => {
    setResponseHeader(event, "Access-Control-Allow-Origin", "*");
    setResponseHeader(event, "Access-Control-Allow-Methods", "GET, POST");
});
