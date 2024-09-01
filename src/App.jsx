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
import LoginLayout from "./Components/Forms/LoginLayout";
import FullScreen from "./Components/Forms/FullScreen";

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
          <div
            className={`transition-all ease-in-out duration-500 sm:grid sm:grid-cols-[250px_1fr] overflow-hidden ${
              showSidebar ? "" : "sm:grid-cols-[57px_1fr]"
            }`}
          >
            <Sidebar
              onClick={() => setShowSidebar(!showSidebar)}
              className={`bg-white pt-[4.5rem] w-full  absolute sm:static transition-all duration-300 sm:border-r sm:overflow-hidden h-screen overflow-auto ${
                showSidebar ? "left-[-639px]" : "left-0"
              }`}
            />
            <main className="  pt-[4.5rem] h-screen overflow-auto bg-blue-50">
              <div className="px-2 sm:px-5">
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
          <Route
            path="/MyDashboard/Forms/Login"
            element={<LoginLayout start={0} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/MyDashboard/Login/:id" element={<FullScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
