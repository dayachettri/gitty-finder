import { Outlet } from 'react-router-dom';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
