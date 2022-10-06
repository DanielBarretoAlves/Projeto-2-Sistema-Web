import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/duvidas'>
        <h1>Duvidas Page</h1>
      </Route>
      <Route exact path='/materias'>
        <h1>Materias Page</h1>
      </Route>
      <Route exact path='/testes'>
        <h1>Testes Page</h1>
      </Route>
      <Route exact path='/reforco'>
        <h1>Reforço Page</h1>
      </Route>
      <Route exact path='/login'>
        <h1>Login Page</h1>
      </Route>
    </Switch>
  )
}

export default Routes
