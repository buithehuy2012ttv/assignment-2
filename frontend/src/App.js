import { useState, useEffect } from 'react';  // import useEffect
import './App.css';
import Header from './Components/Header';
import ContactList from './Components/ContactList';

function App() {

    return (
        <div>     
            <ContactList />
        </div>
    );
}

export default App;