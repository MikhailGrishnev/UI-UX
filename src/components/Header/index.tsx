import { useNavigate } from "react-router-dom";
import { Box, Button, Flex } from "@mantine/core";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.100" p={4}>
      <Flex justify="space-between">
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/about")}>About</Button>
      </Flex>
    </Box>
  );
};
