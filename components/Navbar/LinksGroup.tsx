import { useState } from "react";
import { Group, Box, Collapse, UnstyledButton } from "@mantine/core";
import classes from "./LinksGroup.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string; id: number }[];
}

export function LinksGroup({
  label,
  link,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const pathname = usePathname();
  const hasLinks = Array.isArray(links) && links.length;
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link
      href={`${link.link}`}
      key={link.id}
      as={`${link.link}`}
      className={`${classes.link} ${classes.sublink}`}
      style={{
        fontWeight: pathname === `/${link.link}` ? "bold" : undefined,
        color: pathname === `/${link.link}` ? "red" : undefined,
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        display={"block"}
        w={"100%"}
        p={"xs"}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Link
              href={!hasLinks ? `${link}` : ""}
              as={!hasLinks ? `${link}` : ""}
              className={classes.link}
              style={{
                fontWeight: pathname === `/${link}` ? "bold" : undefined,
                color: pathname === `/${link}` ? "red" : undefined,
              }}
            >
              {label}
            </Link>
          </Box>
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
