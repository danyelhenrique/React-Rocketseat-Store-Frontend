import React from 'react';

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        {/* <th></th> */}
                        <th>PRODUCTC</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-esporte-adaption-masculino/14/KTM-0031-014/KTM-0031-014_detalhe2.jpg?ims=326x"
                                alt=""
                            />
                        </td>
                        <td>
                            <strong>Nice tenis</strong>
                            <span>R$129.99</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={28}
                                        color="#7159c1"
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={28}
                                        color="#7159c1"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$258,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button"> Finish</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}
