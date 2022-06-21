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
        {items.map(item => (
          <TrasactionItem key={item.id}>
            <TransactionData transactionType = "true">{item.type}</TransactionData>
            <TransactionData>{item.amount}</TransactionData>
            <TransactionData>{item.currency}</TransactionData>
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