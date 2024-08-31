import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Container, Section } from "./Components/index";
import AllButton from "./Components/Button/AllButton";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Forms/Login";
import NotFound from "./CustomComponents/NotFound";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login2 from "./Components/Forms/Login2";

export const MainTitle = ({ title, className }) => {
  return (
    <h6 className={`text-gray-600 mb-3 text-2xl ${className}`}>{title}</h6>
  );
};
const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <Header
        onClick={() => setShowSidebar(!showSidebar)}
        showSidebar={showSidebar}
      />
      <Section className={``}>
        <Container className={"px-[0px] "}>
          <div className="sm:flex overflow-hidden">
            <Sidebar
              onClick={() => setShowSidebar(!showSidebar)}
              className={` pt-[4.5rem] transition-all duration-500 absolute sm:static w-full sm:border-r sm:overflow-hidden h-screen overflow-auto ${
                showSidebar
                  ? "-left-[642px] sm:w-[250px]  "
                  : "-left-[0px] sm:w-[57px]"
              }`}
            />
            <main className="flex-grow pt-[4.5rem] h-screen overflow-auto bg-blue-50">
              <div className="px-3">
                <Outlet />
              </div>
              <hr className="mb-2" />
              <Footer />
            </main>
          </div>
        </Container>
      </Section>
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/MyDashboard/Buttons" element={<AllButton />} />
          <Route path="/MyDashboard/Forms/Login" element={<Login2 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
