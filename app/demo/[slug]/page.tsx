import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos } from "../../../config/demos";
import { ClinicPage } from "../../../components/ClinicPage";

// Demo sites for prospects live at /demo/<slug>. Only slugs listed in config/demos exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const clinic = demos[(await params).slug];
  if (!clinic) return {};
  return {
    title: `${clinic.name} | ${clinic.city}`,
    description: clinic.seoDescription,
    // Demos use real clinic names, so keep them out of search engines
    robots: { index: false, follow: false },
  };
}

export default async function DemoPage({ params }: Props) {
  const clinic = demos[(await params).slug];
  if (!clinic) notFound();
  return <ClinicPage clinic={clinic} demo />;
}
