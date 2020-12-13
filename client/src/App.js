import React from "react";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import ItemModal from "./components/itemModal";
import ShoppingList from "./components/ShoppingList";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
