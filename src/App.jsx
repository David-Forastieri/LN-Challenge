import React from 'react'
import ArticlesGrid from "./components/ArticlesGrid"
import Header from "./components/Header"

function App() {

  return (
      <div id="wrap">
        <main>
          <div className="lay-sidebar">
            <div className="sidebar__main">
              <Header />
              <ArticlesGrid />
            </div>
            <div className="sidebar__aside">
            <div className="banner --large">
            <div className="com-ranking hlp-none hlp-tablet-none"></div>
            </div>
            </div>
          </div>
        </main>
      </div>
  )
}

export default App
