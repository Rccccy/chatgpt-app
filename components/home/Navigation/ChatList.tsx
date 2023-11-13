'use client'
import { groupByDate } from "@/common/util";
import { Chat } from "@/types/chat";
import { useMemo, useState } from "react";
import ChatItem from "./ChatItem";

export default function ChatList() {
  const [chatList, setChatList] = useState<Chat[]>([
    {
      id: "1",
      title: "next",
      updateTime: Date.now(),
    },
    {
      id: "2",
      title: "React",
      updateTime: Date.now() + 1,
    },
    {
      id: "3",
      title: "vue",
      updateTime: Date.now() + 2,
    },
    {
      id: "4",
      title: "vue",
      updateTime: Date.now() + 2,
    },
    {
      id: "5",
      title: "vue",
      updateTime: Date.now() + 2,
    },
  ]);

  const [selectedChat, setSelectedChat] = useState<Chat>();
  const groupList = useMemo(() => {
    return groupByDate(chatList);
  }, [chatList]);

  return (
    <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
      {groupList.map(([date, list]) => {
        return (
          <div key={date}>
            <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
              {date}
            </div>
            <ul>
              {list.map((item) => {
                const selected = selectedChat?.id === item.id;
                return (
                  <ChatItem
                    key={item.id}
                    item={item}
                    selected={selected}
                    onSelected={(chat) => {
                      setSelectedChat(chat);
                    }}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
