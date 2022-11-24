import Login from './Login'
import Register from './Register';
import { Route, Routes } from 'react-router-dom';

const LoginStack: React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default LoginStack;
