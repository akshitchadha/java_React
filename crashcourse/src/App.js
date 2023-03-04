import Banner from './banner';
import NavBar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
function App() {


  return (
    <Router>
      <div className="App">
        <Banner />
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
            <Create/>
            </Route>
            <Route path="/blogdetail" component={BlogDetails}>
            </Route>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
