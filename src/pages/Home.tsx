import { Button, Flex } from "@mantine/core";
import { CatalogModule } from "../modules/CatalogModule";

export default function Home() {
  return (
    <Flex p={16} direction="column">
      <h1>Добро пожаловать!</h1>
      {/* <Button
        label="Нажми меня"
        onClick={() => alert("Кнопка нажата!")}
        color="blue"
        size="large"
      /> */}
      <Button m={30} w={400} h={100} fz={30}>
        Привет
      </Button>

      <CatalogModule />
    </Flex>
  );
}
