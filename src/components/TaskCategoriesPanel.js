import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { Divider, List } from "@mui/material";
import { Box } from "@mui/system";
import Item from "./Item";
import DeleteButton from "./DeleteButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Context } from "../state/reducer";
import { useContext } from "react";

export function TaskCategoriesPanel() {
  const { state, dispatch } = useContext(Context);

  function addCategory() {
    return {
      type: "ADD_CATEGORY",
      payload: "Untitled category",
    };
  }

  function deleteCategory(index) {
    return {
      type: "DELETE_CATEGORY",
      payload: index,
    };
  }

  function selectCategory(category) {
    return {
      type: "SELECT_CATEGORY",
      payload: category,
    };
  }

  return (
    <Box sx={{ overflow: "auto" }}>
      <List>
        <Item
          key={0}
          text="All"
          icon={<HomeIcon />}
          onClick={() => dispatch(selectCategory(0))}
        ></Item>
        <Item
          key={1}
          text="Important"
          icon={<StarBorderIcon />}
          onClick={() => dispatch(selectCategory(1))}
        ></Item>
      </List>
      <Divider />
      <List>
        <Item
          key={2}
          text="Add category"
          icon={<AddIcon />}
          onClick={() => dispatch(addCategory())}
        ></Item>
        {state.categories.map(
          (category, index) =>
            index >= 2 && (
              <Item
                key={category + index}
                text={category}
                icon={<FormatListBulletedIcon />}
                buttons={[
                  <DeleteButton
                    key={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteCategory(index));
                    }}
                  />,
                ]}
                onClick={() => dispatch(selectCategory(index))}
              />
            )
        )}
      </List>
    </Box>
  );
}
