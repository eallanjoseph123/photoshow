import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Home from './components/Home/Home'
import Profile from './components/Profile'
import Header from './components/layout/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
