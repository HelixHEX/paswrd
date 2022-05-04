import { useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Flex,
  useClipboard,
  Button,
} from "@chakra-ui/react";
const PasswordsList = () => {
  const passwords = useSelector((state) => state.passwords);
  return (
    <>
      <Flex
        mt={10}
        w={{ sm: "100%", md: "70%" }}
        flexDir={"column"}
        alignSelf={"center"}
      >
        <Heading>Passwords</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Password</Th>
              </Tr>
            </Thead>
            <Tbody>
              {passwords.map((password, index) => (
                <Password key={index} password={password} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

const Password = ({password}) => {
  const { onCopy, hasCopied } = useClipboard(password.password);

  return (
    <>
      <Tr>
        <Td>{password.name}</Td>
        <Td>
          {password.password}{" "}
          <Button ml={5} rounded={'full'} size='sm' onClick={onCopy}>{hasCopied ? "Copied" : "Copy"}</Button>{" "}
        </Td>
      </Tr>
    </>
  );
};

export default PasswordsList;
