export function conflitError() {
    return {
        name: "ConflitError",
        message: "Conflit Error",
    };
}
export function notFound() {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}
export default {
    conflitError: conflitError,
    notFound: notFound,
};
