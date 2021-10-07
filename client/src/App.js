import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/auth"
            exact
            component={Auth}
            // component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
