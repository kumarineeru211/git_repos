import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Task from './pages/Task'


import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = () => {
      const firstNam = localStorage.getItem('firstN');
      const lastNam = localStorage.getItem('lastN');
      if (firstNam && lastNam) {
        setData({ firstNam, lastNam });
      }
    };

    getData();
  }, []);

  const saveFormData = (firstName, lastName, email, phone) => {
    localStorage.setItem('firstN', firstName);
    localStorage.setItem('lastN', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    setData({ firstNam: firstName, lastNam: lastName });
  };

  const clearData = () => {
    const confirmdata = window.confirm('Are you want to clear data');
    if (confirmdata) {
      localStorage.clear();
      setData({});
      alert('Data cleared successfully!');
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home dataclean={clearData} firstNam={data.firstNam} lastNam={data.lastNam} />}
        />
        <Route path="/contact" element={<Contact saveFormData={saveFormData} />} />
        <Route path="/task" element={<Task />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
