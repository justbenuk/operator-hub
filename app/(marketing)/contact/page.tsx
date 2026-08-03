import PageContainer from "@/components/PageContainer";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACTDATA } from "@/data/Contactdata";
import MainContactForm from "@/features/contacts/forms/MainContactForm";
import { CarTaxiFront, FactoryIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="py-20 flex flex-col">
        <h1 className="font-semibold text-4xl">Contact Us</h1>
        <span>Got a question about our platform or need help?</span>
        <span>We are happy to help</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-1">
          <div className="grid gap-10">
            {CONTACTDATA.map((item, idx) => (
              <div key={idx} className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary p-2">
                  <CarTaxiFront />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <span>{item.tag}</span>
                  <span>{item.mail}</span>
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
    </PageContainer>
  );
}
