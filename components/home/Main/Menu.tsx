'use client'
import { useAppContext } from "@/components/AppContext";
import Button from "@/components/common/Button";
import { ActionType } from "@/reducers/AppReducer";
import { LuPanelLeft } from "react-icons/lu";
export default function Menu() {
  const {
    state: { displayNavigation },
    dispatch,
  } = useAppContext();
  const navShow = () => {
    return dispatch({
      type: ActionType.UPDATE,
      field: "displayNavigation",
      value: true,
    });
  };
  return (
    <Button
      className={`${displayNavigation ? "hidden" : ""} fixed left-2 top-2`}
      icon={LuPanelLeft}
      variant="outline"
      onClick={navShow}
    ></Button>
  );
}
