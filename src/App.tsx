import { Route, Routes } from "react-router-dom";
import "./globals.css";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";

function App() {

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
