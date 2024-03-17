import Link from "next/link";
import menuData from "../../data.json";
import { Box, Button, Title } from "@mantine/core";
import { BsHeartArrow } from "react-icons/bs";
import getDocuments from "../../firebase/database/getData";
import { DocumentData } from "firebase/firestore";
import VimeoVideo from "../../components/Navbar/VimeoVideo";

const HomePage = async () => {
  const data: DocumentData[] = await getDocuments("data");

  if (data)
    return (
      <Box
        display={"flex"}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        h={"100vh"}
      >
        <Box mb={50}>
          <Title order={1}>{data[0].title}</Title>
        </Box>
        <VimeoVideo videoId={data[0].mainMedia.link} />
        <Box
          mt={10}
          display="inline-flex"
          w={"65%"}
          style={{ justifyContent: "flex-end" }}
        >
          <Link
            href={`/[${menuData[0].link}]`}
            as={`/${menuData[0].link}`}
            style={{
              textDecoration: "none",
              color: "light-dark(var(--mantine-color-gray-7)",
            }}
          >
            <Button
              variant="transparent"
              c={"light-dark(var(--mantine-color-gray-7)"}
              size="md"
              rightSection={<BsHeartArrow />}
            >
              Enter
            </Button>
          </Link>
        </Box>
      </Box>
    );
};

export default HomePage;
