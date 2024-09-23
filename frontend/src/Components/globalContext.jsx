import React, { useContext, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      setIncomes((prevIncomes) => [...prevIncomes, response.data]); // Update incomes after adding
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // Add income
  // const addIncome = async (income) => {
  //   const response = await axios
  //     .post(`${BASE_URL}add-income`, income)
  //     .catch((err) => {
  //       setError(err.response.data.message);
  //     });
  //   // getIncomes();
  // };

  // Get incomes
  //   const getIncomes = async () => {
  //     const response = await axios.get(`${BASE_URL}get-incomes`);
  //     setIncomes(response.data);
  //     console.log(response.data);
  //   };

  // Delete income
  //   const deleteIncome = async (id) => {
  //     const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
  //     getIncomes();
  //   };

  // Calculate total income
  //   const totalIncome = () => {
  //     let totalIncome = 0;
  //     incomes.forEach((income) => {
  //       totalIncome = totalIncome + income.amount;
  //     });
  //     return totalIncome;
  //   };

  // Add expense
  // const addExpense = async (expense) => {
  //   const response = await axios
  //     .post(`${BASE_URL}add-expense`, expense)
  //     .catch((err) => {
  //       setError(err.response.data.message);
  //     });
  //   getExpenses();
  // };

  // Get expenses
  // const getExpenses = async () => {
  //   const response = await axios.get(`${BASE_URL}get-expenses`);
  //   setExpenses(response.data);
  //   console.log(response.data);
  // };

  // Delete expense
  // const deleteExpense = async (id) => {
  //   const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
  //   getExpenses();
  // };

  // Calculate total expenses
  // const totalExpenses = () => {
  //   let totalExpenses = 0;
  //   expenses.forEach((expense) => {
  //     totalExpenses = totalExpenses + expense.amount;
  //   });
  //   return totalExpenses;
  // };

  // Calculate total balance
  //   const totalBalance = () => {
  //     return totalIncome() - totalExpenses();
  //   };

  // Get transaction history
  //   const transactionHistory = () => {
  //     const history = [...incomes, ...expenses];
  //     history.sort((a, b) => {
  //       return new Date(b.createdAt) - new Date(a.createdAt);
  //     });
  //     return history.slice(0, 3);
  //   };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        // getIncomes,
        // incomes,
        // deleteIncome,
        // expenses,
        // totalIncome,
        // addExpense,
        // getExpenses,
        // deleteExpense,
        // totalExpenses,
        // totalBalance,
        // transactionHistory,
        // error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
