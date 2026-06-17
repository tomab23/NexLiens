import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes >
      {/* PUBLIC */}
      <Route path="/" element={<LoginPage />} />

      {/* PRIVATE */}
        {/* <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} /> */}
        <Route path="/home" element={<HomePage />} />

      {/* TEST */}
      
    </Routes>
  )
}

export default AppRouter