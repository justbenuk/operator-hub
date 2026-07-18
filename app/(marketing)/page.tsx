import PageContainer from "@/components/PageContainer";
import SiteHero from "@/components/SiteHero";
import { Card, CardContent } from "@/components/ui/card";
import { FactoryIcon, LocateIcon, ShieldCheckIcon, StarIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <SiteHero />
      <PageContainer className="relative -mt-10 z-10">
        <Card className="bg-gray-900 text-secondary dark:text-secondary-foreground">
          <CardContent>
            <div>
              <div>search</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                <div className="flex flex-row items-center gap-2">
                  <ShieldCheckIcon className=" size-8 text-primary" />
                  <div className="flex flex-col justify-center">
                    <span className=" text-lg font-semibold">Verified Operators</span>
                    <span className="font-semibold">Verified & Approved</span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <StarIcon className=" size-8 text-primary" />
                  <div className="flex flex-col justify-center">
                    <span className=" text-lg font-semibold">Thousands Of Reveiews</span>
                    <span className="font-semibold">From real passangers</span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <LocateIcon className=" size-8 text-primary" />
                  <div className="flex flex-col justify-center">
                    <span className=" text-lg font-semibold">Local & Independent</span>
                    <span className="font-semibold">Supporting Local Companies</span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <FactoryIcon className=" size-8 text-primary" />
                  <div className="flex flex-col justify-center">
                    <span className=" text-lg font-semibold">Driver & Operator</span>
                    <span className="font-semibold">Advice, News & Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    </>
  );
}
