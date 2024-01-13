import { Route, Routes } from "react-router-dom";
import "./globals.css";
import RootLayout from "./_root/RootLayout";
import { AlertCentral, CustomerSupport, Home, Indicators, OneScore } from "./_root/pages";

function App() {

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={"/indicators"} element={<Indicators />} />
        <Route path={"/one-score"} element={<OneScore />} />
        <Route path={"/alert-central"} element={<AlertCentral />} />
        <Route path={"/customer-support"} element={<CustomerSupport />} />
      </Route>
    </Routes>
  )
}

export default App
