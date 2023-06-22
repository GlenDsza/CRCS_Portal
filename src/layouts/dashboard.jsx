import { Routes, Route } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { DashboardNavbar, Configurator, Footer } from "@/widgets/layout";
import routes from "@/routes";

export function Dashboard() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollTopVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <div className="p-4 xl:mx-24">
        <DashboardNavbar />
        <Configurator />
        {scrollTopVisible && (
          <IconButton
            size="lg"
            color="white"
            className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/5"
            ripple={false}
            onClick={scrollToTop}
          >
            <ChevronUpIcon className="h-5 w-5" />
          </IconButton>
        )}
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
