import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MdLibraryBooks, MdOutlineDocumentScanner } from "react-icons/md";

export default function Sidebar() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <MdLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Manual oficial de redação - INEP" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MdLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Manual legal de redação" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MdOutlineDocumentScanner />
        </ListItemIcon>
        <ListItemText primary="Redações" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MdOutlineDocumentScanner />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
    </List>
  );
}
