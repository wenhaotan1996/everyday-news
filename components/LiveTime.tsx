"use client";
import TimeAgo from "react-timeago";

type Props = {
  date: string;
};

export default function LiveTime({ date }: Props) {
  return <TimeAgo date={date} />;
}
