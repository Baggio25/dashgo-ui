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
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiDatabaseLine} href="/historicos">
          Históricos
        </NavLink>
        <NavLink icon={RiGroupFill} href="/pessoas">
          Pessoas
        </NavLink>
        <NavLink icon={RiMoneyDollarCircleLine} href="/contas">
          Contas
        </NavLink>
        <NavLink icon={RiBankLine} href="/bancos">
          Bancos
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="FINANCEIRO">
        <NavLink icon={RiSafeLine} href="/lancamentos">
          Lançamentos
        </NavLink>
        <NavLink icon={RiAddBoxLine} href="/recebimento">
          Recebimentos
        </NavLink>
        <NavLink icon={RiSubtractLine} href="/pagamentos">
          Pagamentos
        </NavLink>
      </NavSection>
    </Stack>
  );
}
