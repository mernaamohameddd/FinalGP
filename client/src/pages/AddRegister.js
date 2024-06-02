import { useState, useEffect } from 'react';

import Register from '../components/Register';

const RegisterPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    
    const handleRegisterSubmit = async (formData) => {
      try {
        
        const response = await fetch('http://localhost:3001/register/CourseRegister', formData);
        console.log(response.data);
        const data = await response.json();
        if(!response.ok){
          throw Error(data.error);
      }
      setSuppliers(data.suppliers);
        setIsLoading(false);
    }
      catch (error) {
        console.error('Error adding register:', error.message);
      }
    };

    
    handleRegisterSubmit();

    return () => {
      fetchAbortController.abort();
    };
  }, []);


  return (
    
    <div>
      <Register onSubmit={suppliers} />
    </div>
  );
};

export default RegisterPage;
