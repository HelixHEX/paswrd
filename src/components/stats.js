import { CheckIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import zxcvbn from "zxcvbn";

const Stats = ({ password }) => {
  const results = zxcvbn(password);

  return (
    <>
      <Stack>
        <List spacing={3}>
          <ListItem>
            <HStack>
              <ListIcon as={CheckIcon} color="green.400" />
              <Text>Guesses: {results.guesses}</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <ListIcon as={CheckIcon} color="green.400" />
              <Flex flexDir={'row'}>
                <Text>Score: </Text>
                <Text color={results.score >= 3 ? 'green.400' : results.score === 2 ? 'yellow.500' : 'red.500'} ml={1}>{results.score}/4</Text>
              </Flex>
            </HStack>
          </ListItem>
        </List>
      </Stack>
    </>
  );
};

export default Stats;
