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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
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
  const [length, setLength] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);

  const genPass = () => {
    let pass = generatePassword(length);
    setPassword(pass);
  };
  
  useEffect(() => {
    let pass = generatePassword(5);
    setPassword(pass);
  }, [])

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
          height={{ sm: "476px", md: "23rem" }}
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
            <Flex flexDir={"column"} w="70%">
              <Text ml={-2} color="gray.600" fontWeight={"900"}>
                Length
              </Text>
              <Slider
                mt={2}
                onChange={(v) => setLength(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                min={5}
                max={25}
                aria-label="slider-ex-1"
                defaultValue={5}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="blue.900"
                  color="white"
                  placement="top"
                  isOpen={showTooltip}
                  label={`${length}`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Flex>
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
