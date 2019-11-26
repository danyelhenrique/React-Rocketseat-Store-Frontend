import producer from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return producer(state, draft => {
                draft.push(action.product);
            });
        case '@cart/REMOVE':
            return producer(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            console.tron.log('UPDATE_AMOUNT_SUCCESS');

            return producer(state, draft => {
                const productIndex = draft.findIndex(p => p._id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }

        default:
            return state;
    }
}
