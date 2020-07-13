export const inputValidator = (input: string) => {
    var regEx = /^[0-9]*\.?[0-9]*$/;
    return input.match(regEx);
};