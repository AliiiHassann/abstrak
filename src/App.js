import React from "react";
import {
  features,
  firstBuyTemp,
  ourTemplate,
  secondBuyTemp,
} from "./data/data";
import "./App.css";
import FirstNavbar from "./components/FirstNavbar";
import { HomeCreative } from "./components/HomeCreative";
import { OurTemplates } from "./components/OurTemplates";
import { Route, Routes } from "react-router-dom";
import { Features } from "./components/Features";
import { BuyTemplate } from "./components/BuyTemplate";
import { StartBusiness } from "./components/StartBusiness";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <FirstNavbar />
              <HomeCreative />
              <OurTemplates ourTemplate={ourTemplate} />
              <Features features={features} />
              <BuyTemplate
                firstBuyTemp={firstBuyTemp}
                secondBuyTemp={secondBuyTemp}
              />
              <StartBusiness />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
