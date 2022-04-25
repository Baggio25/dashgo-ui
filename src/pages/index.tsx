import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

type SigInFormData = {
  email: string;
  password: string;
}

export default function SigIn() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SigInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
          mb="4"
        >
          dashgo
          <Text as="span" ml="1" color="pink.500">
            .
          </Text>
        </Text>
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register("email")}
          //error={errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register("password")}
          //error={errors.password}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
