import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
import PageContainer from "./PageContainer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function SiteHero() {
  return (
    <section className=" bg-background">
      <PageContainer className="rounded-2xl lg:rounded-none">
        <div className="grid min-h-136 grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
          <div className="relative z-10 flex max-w-2xl flex-col items-start py-14 sm:py-20 lg:py-24">
            <Badge className="mb-5 h-auto rounded-sm bg-primary/15 px-2.5 py-1 text-[0.68rem] font-bold tracking-[0.08em] text-chart-4 uppercase">
              The UK&apos;s independent taxi directory
            </Badge>

            <h1 className="text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.98] font-bold tracking-[-0.055em] text-foreground">
              Find trusted. Travel safe.
              <span className="mt-2 block text-primary">Support local.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Connecting passengers with trusted local taxi companies and
              supporting operators across the UK.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 font-semibold shadow-sm">
                <Link href="/directory">
                  <MapPin className="size-4" />
                  Find a Taxi Near You
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-foreground/25 px-6 font-semibold"
              >
                <Link href="/login">
                  <Building2 className="size-4" />
                  List Your Business
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-88 min-w-0 sm:h-122 lg:h-full lg:min-h-136">
            <div className="absolute inset-y-0 -left-6 right-[-15vw] overflow-hidden lg:-left-20">
              <Image
                src="/london-taxi-hero.jpg"
                alt="Black London cab driving through the city"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-[55%_center]"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/5 via-transparent to-black/5" />
            </div>

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-6 h-full w-[72%] overflow-visible lg:-left-20 lg:w-[68%]"
              viewBox="0 0 420 540"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 0 H 386 C 292 72 188 166 108 287 C 52 371 28 422 61 448 C 80 464 103 492 112 552 H 0 Z"
                className="fill-background"
              />
              <path
                d="M 386 0 C 292 72 188 166 108 287 C 52 371 28 422 61 448 C 80 464 103 492 112 552"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
