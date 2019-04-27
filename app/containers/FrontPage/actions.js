import { DISPATCH_ACTION } from './constants'

export const frontPageAction = ({ data }) => {
    return ({
        type: DISPATCH_ACTION,
        data,
    })
};
