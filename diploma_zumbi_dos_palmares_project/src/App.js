import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/Navbar';
import SysRoutes from './SysRoutes';
import ContactsFormProvider from './context/ContactFormProvider';
import PeopleListProvider from './context/PeopleListProvider';
import UsersProvider from './context/UsersProvider'
import SearchProvider from './context/SearchProvider';
import FavoritesProvider from './context/FavoritesProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsersProvider>
          <NavBar/>
            <ContactsFormProvider>
            <PeopleListProvider>
              <SearchProvider> 
                <FavoritesProvider>
                  <SysRoutes/>
                </FavoritesProvider>
              </SearchProvider>
            </PeopleListProvider>
            </ContactsFormProvider>
        </UsersProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
