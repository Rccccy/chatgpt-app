"use client";
import { Chat } from "@/types/chat";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md";
import { PiChatBold, PiTrashBold } from "react-icons/pi";

type Props = {
  item: Chat;
  selected: boolean;
  onSelected: (chat: Chat) => void;
};
export default function ChatItem({ item, selected, onSelected }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    setIsEdit(false);
    setDeleting(false);
  }, [selected]);
  return (
    <li
      onClick={() => {
        onSelected(item);
      }}
      key={item.id}
      className={`${
        selected ? "bg-gary-800 pr-[3.5em]" : "from-gray-900"
      } relative group flex items-center p-3 space-x-3 cursor-pointer rounded-md hover:bg-gray-800`}
    >
      <div>{deleting ? <PiTrashBold /> : <PiChatBold />}</div>
      {isEdit ? (
        <input
          autoFocus={true}
          className="flow-1 min-w-0 bg-transparent outline-none"
          defaultValue={item.title}
          type="text"
        />
      ) : (
        <div className="relative flex-1 whitespace-nowrap overflow-hidden">
          {item.title}
          <span
            className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 bg-gradient-to-l ${
              selected ? "from-gray-800" : "from-gray-900"
            }`}
          ></span>
        </div>
      )}

      {selected && (
        <div className="absolute right-1 flex">
          {isEdit || deleting ? (
            <>
              <button
                onClick={(e) => {
                  if (deleting) {
                    console.log("deleted", isEdit);
                  } else {
                    console.log("edited");
                  }
                  setDeleting(false);
                  setIsEdit(false);
                  e.stopPropagation();
                }}
                className="p-1 hover:text-white"
              >
                <MdCheck />
              </button>
              <button
                onClick={(e) => {
                  setDeleting(false);
                  setIsEdit(false);
                  e.stopPropagation();
                }}
                className="p-1 hover:text-white"
              >
                <MdClose />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={(e) => {
                  setIsEdit(true);
                  e.stopPropagation();
                }}
                className="p-1 hover:text-white"
              >
                <AiOutlineEdit />
              </button>
              <button
                onClick={(e) => {
                  setDeleting(true);
                  e.stopPropagation();
                }}
                className="p-1 hover:text-white"
              >
                <MdDeleteOutline />
              </button>
            </>
          )}
        </div>
      )}
    </li>
  );
}
