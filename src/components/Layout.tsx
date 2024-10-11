import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{ minHeight: "100vh", width: "100%", backgroundColor: "#695ca3" }}
    >
      {children}
    </div>
  );
};
export default Layout;
