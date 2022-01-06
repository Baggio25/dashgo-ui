import {
  Box,
  Button,
  Checkbox,
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
} from "@chakra-ui/react";
import {
  RiAddLine,
  RiDeleteBackLine,
  RiDeleteBinLine,
  RiPencilLine,
} from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
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

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Ativo</Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" defaultIsChecked />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Rodrigo Baggio</Text>
                    <Text fontSize="sm" color="gray.300">
                      rodrigo.baggio.si@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>05 de janeiro de 2022</Td>
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
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="xs"
                      fontSize="xs"
                      colorScheme="red"
                      color="gray.100"
                      leftIcon={<Icon as={RiDeleteBinLine} />}
                    >
                      Excluir
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Rodrigo Baggio</Text>
                    <Text fontSize="sm" color="gray.300">
                      rodrigo.baggio.si@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>05 de janeiro de 2022</Td>
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
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="xs"
                      fontSize="xs"
                      colorScheme="red"
                      color="gray.100"
                      leftIcon={<Icon as={RiDeleteBinLine} />}
                    >
                      Excluir
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Rodrigo Baggio</Text>
                    <Text fontSize="sm" color="gray.300">
                      rodrigo.baggio.si@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>05 de janeiro de 2022</Td>
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
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="xs"
                      fontSize="xs"
                      colorScheme="red"
                      color="gray.100"
                      leftIcon={<Icon as={RiDeleteBinLine} />}
                    >
                      Excluir
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
