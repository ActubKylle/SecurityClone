import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="fixed left-0 top-0 z-[999999] h-[3px] w-full overflow-hidden">
      <div
        className={`h-full bg-[#0283A8] transition-all duration-500 ease-out ${
          loading ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
}

export default PageLoader;