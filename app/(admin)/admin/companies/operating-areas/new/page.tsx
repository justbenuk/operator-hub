import PageContainer from "@/components/PageContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddOperatingArea from "@/features/Directory/Forms/AddOperatingArea";

export default function OperatingAreasNewPage() {
  return (
    <PageContainer className="mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Add Operating Area</CardTitle>
          <CardDescription>
            We do this manually to stop duplication
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddOperatingArea />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
