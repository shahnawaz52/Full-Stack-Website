import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import AddTask from './tasks/AddTask';
import Main from './containers/Main';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return ( 
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/articles' element={<ArticleListPage />} />
              <Route path="/expense" element={<Main />} />
              <Route path='/tasks' element={<AddTask />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path='*' element={<NotFoundPage />} />
              <Route path='/create-account' element={<CreateAccountPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
