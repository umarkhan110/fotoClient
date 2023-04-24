import { createContext, useState, useEffect } from "react";
export const ShareUrl = createContext(null);

function Context({ children }) {
  const [shareUrl, setShareUrl] = useState();

  return (
    <ShareUrl.Provider value={{ shareUrl, setShareUrl }}>
      {children}
    </ShareUrl.Provider>
  );
}

export default Context;
