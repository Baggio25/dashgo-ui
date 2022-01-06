import { Stack } from "@chakra-ui/react";
import {
  RiAddBoxLine,
  RiBankLine,
  RiContactsLine,
  RiDashboardLine,
  RiGroupFill,
  RiMoneyDollarCircleLine,
  RiSafeLine,
  RiSubtractLine,
  RiDatabaseLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiDatabaseLine}>Históricos</NavLink>
        <NavLink icon={RiGroupFill}>Pessoas</NavLink>
        <NavLink icon={RiMoneyDollarCircleLine}>Contas</NavLink>
        <NavLink icon={RiBankLine}>Bancos</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>
      <NavSection title="FINANCEIRO">
        <NavLink icon={RiSafeLine}>Lançamentos</NavLink>
        <NavLink icon={RiAddBoxLine}>Recebimentos</NavLink>
        <NavLink icon={RiSubtractLine}>Pagamentos</NavLink>
      </NavSection>
    </Stack>
  );
}
