import Image from "next/image";
import notFound from "@/public/404.png";

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-6 text-center">
      <Image src={notFound} width={220} height={220} alt="404" />
      <p className="text-lg font-bold">
        Oops! Looks like you have reached an invalid path! Return back to your
        previous page or the home page.
      </p>
    </div>
  );
}
