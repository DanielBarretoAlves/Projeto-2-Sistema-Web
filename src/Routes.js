import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/home'>
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route exact path='/duvidas'>
        <Layout>
          <h1>Duvidas Page</h1>
        </Layout>
      </Route>
      <Route exact path='/materias'>
        <Layout>
          <h1>Materias Page</h1>
        </Layout>
      </Route>
      <Route exact path='/testes'>
        <Layout>
          <h1>Testes Page</h1>
        </Layout>
      </Route>
      <Route exact path='/reforco'>
        <Layout>
          <h1>Reforço Page</h1>
        </Layout>
      </Route>
      <Route exact path='/'>
        <LoginPage />
      </Route>
    </Switch>
  )
}

export default Routes
