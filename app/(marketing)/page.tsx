import PageContainer from "@/components/PageContainer";
import SiteLogo from "@/components/SiteLogo";

export default function Home() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center space-y-4">
        <SiteLogo size="large" />
        <h1 className="text-4xl font-semibold">Under Construnction</h1>
      </div>
    </PageContainer>
  );
}
