export const authMiddleware = store => next => action => {
    next(action);
}
