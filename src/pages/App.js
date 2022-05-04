import { Flex } from "@chakra-ui/react";
import GenPassword from "./genpassword";
import PasswordList from "./passwordslist";
import ColorModeSwitcher from "../components/colormodeswitcher";

const App = () => {
  return (
    <>
      <Flex flexDir={"column"} w="100%" h="100vh">
        <Flex pos="absolute" right={2} top={2}>
          <ColorModeSwitcher />
        </Flex>
        <Flex flexDir={'column'} mt={[10, 10, 0, 0]}>
          <GenPassword />
          <PasswordList />
        </Flex>
      </Flex>
    </>
  );
};

export default App;
