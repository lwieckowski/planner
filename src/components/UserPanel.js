import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function UserPanel() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ margin: 2, width: 48, height: 48, bgcolor: "orange" }}>
        LW
      </Avatar>
      <Box>
        <Typography>Lukasz Wieckowski</Typography>
        <Typography variant="caption">luukka.wieckowski@gmail.com</Typography>
      </Box>
    </Box>
  );
}
