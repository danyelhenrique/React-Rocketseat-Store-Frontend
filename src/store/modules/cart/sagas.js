import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { formatPrice } from '../../../utils/format';

import { addToCartSucess, updateAmountSuccess } from './actions';

function* addTocart({ id }) {
    const productExists = yield select(state => {
        return state.cart.find(p => p._id === id);
    });

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.store.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('quantity ordered for stock');
        return;
    }
    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api.get, `/stock/${id}`);

        const data = {
            ...response.data.store,
            amount: 1,
            priceFormated: formatPrice(response.data.store.price),
        };

        yield put(addToCartSucess(data));

        history.push('/cart');
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.store.amount;

    if (amount > stockAmount) {
        toast.error('quantity ordered for stock');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addTocart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
