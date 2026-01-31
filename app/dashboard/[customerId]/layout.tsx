import { Metadata } from "next";
import { getCustomer } from "@/lib/data";

interface Props {
    params: Promise<{ customerId: string }>;
    children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { customerId } = await params;
    const customer = getCustomer(customerId);

    if (!customer) {
        return {
            title: "With Love",
        };
    }

    return {
        title: `For ${customer.displayName} | With Love`,
        description: `A special Valentine's message for ${customer.displayName}.`,
        openGraph: {
            title: `For ${customer.displayName} | With Love`,
            description: `A special Valentine's message for ${customer.displayName}.`,
        },
    };
}

export default function CustomerLayout({ children }: Props) {
    return <>{children}</>;
}
