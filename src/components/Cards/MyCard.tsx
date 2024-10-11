import { Badge, Group, Image, Text, Card } from "@mantine/core";
import { GameProps } from "../../modules/CatalogModule";

export const MyCard = ({ id, label, price }: GameProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={400}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text>№{id}</Text>
        <Text fw={500}>{label}</Text>
        <Badge
          color={
            price > 5000
              ? "red"
              : price > 4000
              ? "orange"
              : price > 2000
              ? "yellow"
              : "green"
          }
        >
          {price}
        </Badge>
      </Group>

      {/* <Text size="sm" c="dimmed">
        Look at my mountains!
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
    </Card>
  );
};
