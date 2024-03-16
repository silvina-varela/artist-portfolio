"use client";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  AppShell,
  Box,
  Burger,
} from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      layout="alt"
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      withBorder={false}
    >
      <Box
        right={0}
        style={{ position: "absolute", zIndex: 1000 }}
        m={"sm"}
        hiddenFrom="sm"
      >
        <Burger opened={opened} onClick={toggle} size="sm" />
      </Box>
      <AppShell.Navbar onClick={toggle} p="lg">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main> {children}</AppShell.Main>
    </AppShell>
  );
}
