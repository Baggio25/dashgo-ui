import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Lista de Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Rodrigo Baggio</Text>
                    <Text fontSize="sm" color="gray.300">
                      rodrigo.baggio.si@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de janeiro de 2022</Td>}
                <Td>
                  <HStack spacing="2" mx="1" pr="4" py="1">
                    <Button
                      as="a"
                      size="xs"
                      fontSize="xs"
                      colorScheme="gray"
                      color="gray.700"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      {isWideVersion ? "Editar" : ""}
                    </Button>
                    <Button
                      as="a"
                      size="xs"
                      fontSize="xs"
                      colorScheme="red"
                      color="gray.100"
                      leftIcon={<Icon as={RiDeleteBinLine} />}
                    >
                      {isWideVersion ? "Excluir" : ""}
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
