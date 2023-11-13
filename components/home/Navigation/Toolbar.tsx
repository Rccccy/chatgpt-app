import { useAppContext } from "@/components/AppContext";
import Button from "@/components/common/Button";
import { ActionType } from "@/reducers/AppReducer";
import { MdLightMode, MdDarkMode, MdInfo } from "react-icons/md";
export default function Toolbar() {
  const {
    state: { themeMode },
    dispatch,
  } = useAppContext();
  const changeTheme = () => {
    dispatch({
      type: ActionType.UPDATE,
      field: "themeMode",
      value: themeMode === "dark" ? "light" : "dark",
    });
  };
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
      <Button
        icon={themeMode === "light" ? MdLightMode : MdDarkMode}
        variant="text"
        onClick={changeTheme}
      ></Button>
      <Button icon={MdInfo} variant="text"></Button>
    </div>
  );
}
