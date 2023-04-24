import Navbar from "./Navbar";
import Footer from "./Footer";
import Share from "./Share";

import { ShareUrl } from "../contexts/Share/share";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { shareUrl } = useContext(ShareUrl);

  return (
    <>
      <Navbar />
      <div className="sm:pt-[100px] pt-[80px]">{children}</div>
      {shareUrl && <Share />}
      <Footer />
    </>
  );
};

export default Layout;
