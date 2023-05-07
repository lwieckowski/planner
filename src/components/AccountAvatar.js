import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

export function AccountAvatar() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ margin: 2, width: 48, height: 48, bgcolor: "orange" }}>
        LW
      </Avatar>
    </Box>
  );
}
