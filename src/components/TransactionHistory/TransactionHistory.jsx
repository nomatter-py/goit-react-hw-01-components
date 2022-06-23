import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionData,
  TransactionTable,
  TrasactionItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <TrasactionItem key={id}>
            <TransactionData transactionType = "true">{type}</TransactionData>
            <TransactionData>{amount}</TransactionData>
            <TransactionData>{currency}</TransactionData>
          </TrasactionItem>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
}