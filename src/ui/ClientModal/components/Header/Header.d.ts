declare module "ui/ClientModal/components/Header/Header" {
  import { FC } from "react";

  interface HeaderProps {
    title: string;
    clientData: string;
    description: string;
  }

  const Header: FC<HeaderProps>;
  export default Header;
}
