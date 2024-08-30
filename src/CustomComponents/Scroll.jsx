import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  console.log("skf");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`p-4 fixed top-0 left-0 w-full transition-all duration-300 ${
          isScrolled ? "bg-blue-500 shadow-lg" : "bg-transparent"
        }`}
      >
        Scroll down to change my background!
      </header>
      <main style={{ height: "200vh" }}>
        <h1>Scroll down to see the effect</h1>
      </main>
    </div>
  );
};

export default Scroll;
