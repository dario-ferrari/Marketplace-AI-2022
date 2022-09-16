export const userMiddleware = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
}