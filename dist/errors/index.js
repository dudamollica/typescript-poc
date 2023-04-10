export function conflitError(message) {
    return {
        name: 'ConflitError',
        message: message,
    };
}
export function notFound() {
    return {
        name: 'NotFoundError',
        message: 'No result for this search!',
    };
}
export function unauthorizedError() {
    return {
        name: 'UnauthorizedError',
        message: 'You must be signed in to continue',
    };
}
