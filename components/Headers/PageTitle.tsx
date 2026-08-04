import PageContainer from "../PageContainer";
import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  children: ReactNode;
  image?: string;
}
export default function PageTitle({
  title,
  children,
  image = "/assets/bg.jpg",
}: PageTitleProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/60 w-full h-full py-10 lg:py-30 mb-20">
        <PageContainer>
          <h1 className="font-semibold text-2xl lg:text-4xl text-primary">
            {title}
          </h1>
          <div className="lg:text-lg text-secondary flex flex-col dark:text-white">
            {children}
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
