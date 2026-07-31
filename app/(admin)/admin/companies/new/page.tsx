import PageContainer from "@/components/PageContainer";
import AddDirectoryForm from "@/features/Directory/Forms/AddDirectoryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Company Profile",
};

export default function NewProfilePage() {
  return (
    <PageContainer className="mt-10">
      <AddDirectoryForm />
    </PageContainer>
  );
}
