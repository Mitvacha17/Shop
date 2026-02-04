import ClientPage from "./ClientPage";

interface PageProps {
  params: Promise<{ customerId: string }>;
}

export async function generateStaticParams() {
  const { customers } = await import("@/lib/data");
  return customers.map((customer) => ({
    customerId: customer.id,
  }));
}

export default async function CustomerPage({ params }: PageProps) {
  const { customerId } = await params;
  return <ClientPage customerId={customerId} />;
}
