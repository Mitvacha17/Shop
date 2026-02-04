import ClientFailure from "./ClientFailure";

interface PageProps {
  params: Promise<{ customerId: string }>;
}

export async function generateStaticParams() {
  const { customers } = await import("@/lib/data");
  return customers.map((customer) => ({
    customerId: customer.id,
  }));
}

export default async function FailurePage({ params }: PageProps) {
  const { customerId } = await params;
  return <ClientFailure customerId={customerId} />;
}
