import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rodrigo Baggio</Text>
        <Text color="gray.300" fontSize="small">
          rodrigo.baggio.si@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Rodrigo Baggio"
        src="http://github.com/Baggio25.png"
      />
    </Flex>
  );
}
