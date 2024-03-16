import { Box, ScrollArea, Text } from "@mantine/core";
import { LinksGroup } from "./LinksGroup";
import classes from "./Navbar.module.css";
import menuData from "../../data.json";

export function Navbar() {
  const links = menuData.map((item) => <LinksGroup {...item} key={item.id} />);

  return (
    <>
      <Box className={classes.header}>
        <Text size="xl">Title </Text>
      </Box>
      <ScrollArea className={classes.links}>
        <Box className={classes.linksInner}>{links}</Box>
      </ScrollArea>
    </>
  );
}
