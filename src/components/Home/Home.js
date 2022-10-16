import React from 'react'

const Home = () => {
  return (
    <>
      <h1>{localStorage.getItem('user_id')}</h1>
    </>
  )
}

export default Home
