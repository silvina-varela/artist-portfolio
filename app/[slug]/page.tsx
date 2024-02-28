"use client";

import {
  AppShell,
  Burger,
  AppShellMain,
  AppShellNavbar,
  AppShellHeader,
  Text,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "../../components/NavBar";

export default function Page({ params }: { params: { slug: string } }) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      withBorder={false}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader
        hiddenFrom="sm"
        display={"flex"}
        style={{ justifyContent: "space-between", padding: 20 }}
        zIndex={1000}
      >
        <Text size="xl">Titulo</Text>
        <Burger opened={opened} onClick={toggle} size="sm" />
      </AppShellHeader>

      <AppShellNavbar p="md">
        <Container visibleFrom="sm">
          <Text size="xl" visibleFrom="md">
            Titulo
          </Text>
          <NavBar />{" "}
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
          hiddenFrom="sm"
        >
          <NavBar />
        </Container>
      </AppShellNavbar>
      <AppShellMain>{params.slug}</AppShellMain>
    </AppShell>
  );
}
