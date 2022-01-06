import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiMoneyDollarCircleLine,
  RiGroupFill,
  RiInputMethodLine,
  RiBankLine,
  RiSafeLine,
  RiAddBoxLine,
  RiSubtractLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiDashboardLine}>Históricos</NavLink>
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
    </Box>
  );
}
