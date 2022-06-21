import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 0 0 20px;
  min-width: 50%;
  border-collapse: collapse;
  border: 1px solid;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  
  thead {
    color: #fff;
    background-color: lightskyblue;
  }

  th {
    padding: 15px;
    text-transform: uppercase;
    border: 1px solid #fff;
  }
`;

export const TrasactionItem = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TransactionData = styled.td`
  height: 50px;
  text-align: center;
  vertical-align: center;
  color: grey;
  border: 1px solid #ddd;
  text-transform : ${p => (p.transactionType ? "capitalize" : "none")};
`;
