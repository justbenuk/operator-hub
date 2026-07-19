import SearchDirectory from "@/components/Marketing/SearchDirectory";
import PageContainer from "@/components/PageContainer";
import SiteHero from "@/components/SiteHero";
import { Card, CardContent } from "@/components/ui/card";
import { FactoryIcon, LocateIcon, LucideCarTaxiFront, ShieldCheckIcon, StarIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SiteHero />
      <PageContainer className="relative -mt-10 z-10">
        <Card className="bg-gray-900 text-secondary dark:text-secondary-foreground">
          <CardContent>
            <div>
              <SearchDirectory />
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

        <Card className="shadow-xl mt-10">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start justify-between gap-6">
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <LucideCarTaxiFront className="size-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-semibold">Find Local Taxis</span>
                <span className="mr-20">Search trusted taxi companies in your area</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <StarIcon className="size-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-semibold">Read Reviews</span>
                <span className="mr-20">Honest reviews from real passangers</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <ShieldCheckIcon className="size-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-semibold">Travel Safe</span>
                <span className="mr-20">Safty tips and advice to help you travel with confidence</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <LocateIcon className="size-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-semibold">Support Local</span>
                <span className="mr-20">Support independent taxi businesses in your community</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    </div>
  );
}
