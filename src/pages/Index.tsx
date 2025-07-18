
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the courses page since we want that as our main page
    navigate('/');
  }, [navigate]);

  return null;
};

export default Index;
