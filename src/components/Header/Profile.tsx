import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo Baggio</Text>
          <Text color="gray.300" fontSize="small">
            rodrigo.baggio.si@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Rodrigo Baggio"
        src="http://github.com/Baggio25.png"
      />
    </Flex>
  );
}
