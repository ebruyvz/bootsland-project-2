import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Info from './Info';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Header />
      <div className='bg-[#F8FCFF]'>
        <Info />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
};

export default App
