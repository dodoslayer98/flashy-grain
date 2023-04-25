import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import './App.css';
import ItemDetailPage from '../itemDetailPage/ItemDetailPage';
import { CartContext } from '../../contexts/CartContext';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart,setCart] = useState(null)

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <CartContext.Provider value={{ cart, setCart }} >
            <Routes>
            
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/home" element={<HomePage user = {user} setUser={setUser}/>} />
              <Route path="/item/:itemId" element={<ItemDetailPage/>} />
              <Route path="/*" element={<Navigate to="/home"/>}/>
            
            </Routes>
        </CartContext.Provider>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

;
