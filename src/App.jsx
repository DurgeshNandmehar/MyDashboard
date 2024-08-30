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

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleSideBar = () => {};
  return (
    <>
      <Header
        onClick={() => setShowSidebar(!showSidebar)}
        showSidebar={showSidebar}
      />
      <Section className={``}>
        <Container className={"px-[0px] "}>
          <div className="sm:flex bg-blue-400 overflow-hidden">
            <Sidebar
              onClick={() => setShowSidebar(!showSidebar)}
              className={`px-2 pt-[4.5rem] transition-all duration-500 absolute sm:static w-full bg-white sm:border-r sm:overflow-hidden h-screen overflow-auto ${
                showSidebar
                  ? "-left-[642px] sm:w-[250px]  "
                  : "-left-[0px] sm:w-[50px]"
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
          <Route index element={<Main />} />
          <Route path="/MyDashboard/Buttons" element={<AllButton />} />
          <Route path="/MyDashboard/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
