import './App.css'
import React, { Suspense, useEffect, useState } from 'react'
import { Timer, ActivityIndicator, Counter, Welcome, Users, ReduceUsers } from './components';
import SearchUsers from './components/displayUsers/searchUsers';
import RedditThread from './components/redditThread/redditThread';
import CustomForm from './components/form/customForm';
import { ThemeProvider } from './contexts/theme';
import RandomReducer from './components/randomReducer';
import ReduxTodos from './components/reduxTodos/reduxTodos';
import MemoizeTest from './components/memoizeTest';
import { FormProvider } from './contexts/form';
import CustomFormDisplay from './components/form/customFormDisplay';
import StyledComponentsPlayground from './components/styledComponentsPlayground';
import UserTable from './components/Table/userTable';

const STYLES: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  minHeight: "100vh",
  minWidth: "100vw",
  padding: "1rem",
  gap: "1rem",
  overflow: "hidden"
}

function App() {

  const render = (time: number) => (
    <h1 id='timer'>
      {new Date(time).toLocaleTimeString()}
    </h1>
  )

  // useEffect(() => {
  //   console.log("App rerendered...")
  // });

  return (
    <div style={STYLES}>
      <h1>App</h1>
      {/* {Timer({ render })} */}
      {/* <Timer render={render} /> */}
      {/* <Counter /> */}
      {/* <Welcome user='Phantom' primary /> */}
      {/* <Users /> */}
      {/* <ReduceUsers /> */}
      {/* <RandomReducer /> */}
      {/* <ReduxTodos /> */}
      {/* <MemoizeTest /> */}
      {/* <SearchUsers /> */}
      {/* <ThemeProvider>
        <RedditThread />
      </ThemeProvider> */}
      <FormProvider>
        <CustomForm />
        <CustomFormDisplay label='firstName' />
        <CustomFormDisplay label='lastName' />
      </FormProvider>
      {/* <StyledComponentsPlayground /> */}
      {/* <UserTable /> */}
    </div>
  )
}

export default App
