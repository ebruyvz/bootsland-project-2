import React from 'react';

export default function ScrollToTop() {
  const [showButton, setShowButton] = React.useState(false);

  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if ((document.documentElement.scrollTop / scrollTotal) > 0.02) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <button className={showButton ? "scrollToTopBtn showBtn" : "scrollToTopBtn"} onClick={scrollToTop} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" className="mx-auto hover:invert">
            <line x1="12" y1="8" x2="9" y2="11" stroke="white" stroke-width="1" />
            <line x1="12" y1="8" x2="15" y2="11" stroke="white" stroke-width="1" />
            <rect x="11.5" y="7.8" width="1" height="7" fill="white" />
        </svg>
    </button>
  );
};
