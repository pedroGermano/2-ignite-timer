import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo ignite timer" />
      <nav>
        <NavLink title="Timer" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink title="Home" to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
