import { CheckIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import zxcvbn from 'zxcvbn'

const Stats = ({password}) => {
  const results = zxcvbn(password)

  useEffect(() => {
    console.log(results)
  }, [results])
  return (
    <>
      <Stack>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.400" />
            Guesses: {results.guesses}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.400" />
            Score: {results.score}/4
          </ListItem>
        </List>
      </Stack>
    </>
  );
};

export default Stats;
