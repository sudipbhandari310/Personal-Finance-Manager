import React from 'react';
import Form from '../Form/Form';
import { GlobalProvider } from '../globalContext';

const Income = () => {
  return (
    <div>
      <h1>Add Income</h1>
      <GlobalProvider>
        <Form />
      </GlobalProvider>
    </div>
  );
};

export default Income;
