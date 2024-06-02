

function App() {
  return (
      <div className="container">
          <div className="row">
              <div className="column">
                  <h1 className="mt-3">Regotes Rocks!</h1>
              </div>
          </div>
          <div className="row">
              <div className="has-2-cols">
                  <nav className="navbar">
                      <div className="navbar-brand"></div>
                      <div className="navbar-menu">
                          <div className="navbar-end">
                              <div className="navbar-item">
                                  <div className="buttons">
                                      <a href="#!" className="button is-primary">
                                          <strong>Home</strong>
                                      </a>
                                      <a href="#!" className="button is-primary">
                                          <strong>Notes</strong>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  );
}

export default App;
