import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddForm from './components/AddForm/AddForm';
import ContactsList from './components/ContactsList/ContactsList';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter2/Counter2';
import Details from './components/Details/Details';
import EditForm from './components/EditForm/EditForm';
import ContactsContextProvider from './contactsContext';
import CounterContextProvider from './counterContext';

const App = () => {
  return (
    <ContactsContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
         <Routes>
           <Route path='/' element={<Counter />}/>
           <Route path='/counter' element={<Counter2 />}/>

           <Route path='/edit/:id' element={<EditForm />}/>
           <Route path='/details/:id' element={<Details />}/>

           <Route path='/contacts' element={
           <>
            <AddForm />
            <ContactsList />
           </>
          }/>

         </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </ContactsContextProvider>
  )
};

export default App;