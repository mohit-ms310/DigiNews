import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const [progress, setProgress] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false);  

  function toggleTheme () {
    if(isDarkMode) {
      setIsDarkMode(false);
    }
    else {
      setIsDarkMode(true);
    }
  }

    return (
      <div className={`bg-${!isDarkMode ? 'light' : 'dark'}`}>
        <Router>
        <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Switch>
          <Route exact path="/"><News color={isDarkMode} setProgress={setProgress} category="top" turl="https://inshorts.vercel.app/news/top?offset=0&limit=30"/></Route>
          <Route exact path="/trending"><News color={isDarkMode} setProgress={setProgress} category="trending" turl="https://inshorts.vercel.app/news/trending?offset=0&limit=9"/></Route>
          <Route exact path="/business"><News color={isDarkMode} setProgress={setProgress} category="business" turl="https://inshorts.vercel.app/news/topics/business?offset=0&limit=9"/></Route>
          <Route exact path="/national"><News color={isDarkMode} setProgress={setProgress} category="national" turl="https://inshorts.vercel.app/news/topics/national?offset=0&limit=9"/></Route>
          <Route exact path="/startup"><News color={isDarkMode} setProgress={setProgress} category="startup" turl="https://inshorts.vercel.app/news/topics/startup?offset=0&limit=9"/></Route>
          <Route exact path="/entertainment"><News color={isDarkMode} setProgress={setProgress} category="entertainment" turl="https://inshorts.vercel.app/news/topics/entertainment?offset=0&limit=9"/></Route>
          <Route exact path="/science"><News color={isDarkMode} setProgress={setProgress} category="science" turl="https://inshorts.vercel.app/news/topics/science?offset=0&limit=9"/></Route>
          <Route exact path="/world"><News color={isDarkMode} setProgress={setProgress} category="world" turl="https://inshorts.vercel.app/news/topics/world?offset=0&limit=9"/></Route>
          <Route exact path="/sports"><News color={isDarkMode} setProgress={setProgress} category="sports" turl="https://inshorts.vercel.app/news/topics/sports?offset=0&limit=9"/></Route>
          <Route exact path="/technology"><News color={isDarkMode} setProgress={setProgress} category="technology" turl="https://inshorts.vercel.app/news/topics/technology?offset=0&limit=9"/></Route>
        </Switch>
        </Router>
      </div>
    )

}

export default App;
