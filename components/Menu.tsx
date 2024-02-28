import Link from "next/link";
import { List, ListItem, NavLink } from "@mantine/core";

interface MenuItem {
  id: number;
  title: string;
  slug: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  const navLinkStyles = {
    textDecoration: "none", // Remove underline
    backgroundColor: "transparent", // Remove hover background
    color: "black",
  };

  const activeStyles = {
    color: "red", // Change text color when active
  };
  return (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.id}>
          <Link href={`/[${item.slug}]`} as={`/${item.slug}`}>
            {item.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;
