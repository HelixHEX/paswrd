import {
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useClipboard,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { generatePassword } from "../utils/generate";
import { addPassword } from "../actions";
import { useDispatch } from "react-redux";
import Stats from "../components/stats";

const GenPassword = () => {
  const [password, setPassword] = useState("p@$$w0rd");
  const [name, setName] = useState("");
  const { onCopy } = useClipboard(password);
  const dispatch = useDispatch();
  const toast = useToast();

  const genPass = () => {
    let pass = generatePassword();
    pass = `${pass.substring(0, 3)}-${pass.substring(3, 6)}-${pass.substring(
      6,
      9
    )}`;
    setPassword(pass);
  };

  useEffect(() => {
    genPass();
  }, []);

  const handleSubmit = () => {
    if (name === "") {
      toast({
        title: "Please enter a name",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } else {
      dispatch(addPassword(name, password));
      onCopy();
      toast({
        title: "Success",
        description: "Password has been saved and copied to clipboard",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          minW={{ sm: "100%", md: "700px" }}
          w="auto"
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex
            justifyContent="center"
            flex={1}
            bg={useColorModeValue("gray.800", "white")}
          >
            <Text
              alignSelf={"center"}
              color="blue.400"
              fontWeight={"900"}
              fontSize={40}
            >
              PASWRD
            </Text>
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Generate Password
            </Heading>
            <Text
              fontSize={30}
              fontWeight={900}
              color={useColorModeValue("gray.800", "white")}
              size="sm"
              mb={4}
            >
              {password}
            </Text>
            <Input
              placeholder="Name"
              w="70%"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Stats password={password} />

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                w={280}
                fontSize={"sm"}
                rounded={"full"}
                onClick={genPass}
              >
                Generate Password
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                onClick={handleSubmit}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Save
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default GenPassword;
