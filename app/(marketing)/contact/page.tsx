import PageTitle from "@/components/Headers/PageTitle";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACTDATA } from "@/data/Contactdata";
import MainContactForm from "@/features/contacts/forms/MainContactForm";
import { CarTaxiFront, FactoryIcon } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact Us">
        <span>Got a question about our platform or need help?</span>
        <span>We are happy to help</span>
      </PageTitle>
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
          <div className="col-span-1">
            <div className="grid gap-10">
              {CONTACTDATA.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary p-2">
                    <CarTaxiFront />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                    <span className="text-muted-foreground text-sm">
                      {item.tag}
                    </span>
                    <span className="font-semibold italic">{item.mail}</span>
                  </div>
                </div>
              ))}
              <div className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary p-2">
                  <FactoryIcon />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold">Our Office</h1>
                  <span>18 Parkside, Belgrave</span>
                  <span>Tamworth</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <Card>
              <CardContent>
                <MainContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-secondary rounded-xl shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between p-12 gap-10">
            <div>
              <h1 className="text-2xl font-semibold">
                Need help with your Website or Platform?
              </h1>
              <p>
                If you would like to talk about creating, or revamping your
                online presence, drop us a message and we can talk about you
                need
              </p>
            </div>
            <Button asChild size={"lg"} className="px-12 py-6">
              <Link href={"/contact"}>Lets Talk</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
