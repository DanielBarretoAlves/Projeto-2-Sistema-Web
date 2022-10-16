import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MatterPage from './pages/MatterPage'
import AddMatterPage from './pages/AddMatterPage'
import QuestionPage from './pages/QuestionPage'

const Routes = () => {
  return (
    <Switch>
      <Route path='/home'>
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route path='/questions'>
        <Layout>
          <QuestionPage />
        </Layout>
      </Route>
      <Route path='/matters'>
        <Layout>
          <MatterPage />
        </Layout>
      </Route>
      <Route path='/addMatter'>
        <Layout>
          <AddMatterPage />
        </Layout>
      </Route>
      <Route path='/testes'>
        <Layout>
          <h1>Testes Page</h1>
        </Layout>
      </Route>
      <Route path='/reforco'>
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
