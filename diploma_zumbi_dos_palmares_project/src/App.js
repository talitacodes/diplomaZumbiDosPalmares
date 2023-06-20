import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/Navbar';
import SysRoutes from './SysRoutes';
import ContactsFormProvider from './context/ContactFormProvider';
import PeopleListProvider from './context/PeopleListProvider';
import UsersProvider from './context/UsersProvider'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsersProvider>
          <NavBar/>
            <ContactsFormProvider>
            <PeopleListProvider>
              <SysRoutes/>
            </PeopleListProvider>
            </ContactsFormProvider>
        </UsersProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
