import React from "react"
import { Route, Routes } from "react-router-dom"
// We will create these two pages in a moment
import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"
export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} ></Route>
      <Route path="/:id" element={<UserPage/>} ></Route>
    </Routes>
  )
}
