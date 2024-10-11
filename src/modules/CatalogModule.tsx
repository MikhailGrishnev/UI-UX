import { Flex } from "@mantine/core";
import { MyCard } from "../components/Cards/MyCard";

export interface GameProps {
  id: number;
  label: string;
  price: number;
}

export const CatalogModule = () => {
  const data: GameProps[] = [
    {
      id: 1,
      label: "Игра 1",
      price: 2000,
    },
    {
      id: 2,
      label: "Игра 2",
      price: 3000,
    },
    {
      id: 3,
      label: "Игра 3",
      price: 4000,
    },
    {
      id: 4,
      label: "Игра 4",
      price: 4000,
    },
    {
      id: 5,
      label: "Игра 5",
      price: 5000,
    },
    {
      id: 6,
      label: "Игра 6",
      price: 6000,
    },
  ];

  const games = data.map((el) => <MyCard {...el} />);

  return (
    <Flex gap={10} wrap="wrap">
      {games}
    </Flex>
  );
};
