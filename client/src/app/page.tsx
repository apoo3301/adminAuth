import { Input } from "@/components/extern/AcInput";
import { Label } from "@/components/extern/AcLabel";
import CarouselDemo from "@/components/extern/CarouselDemo";
import FooterComp from "@/components/extern/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link"
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Lifestyle with Our Concierge Service
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover a world of personalized assistance, where your every need is anticipated and fulfilled with
                  unparalleled care and attention to detail.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src="/bg.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our exclusive accommodations
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Thanks to years of experience, we&apos;ve built a strong trust with our property owners. This allows us to offer exclusive accommodations on <strong>WelkomHOME</strong> that you won&apos;t find anywhere else.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <ClockIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Availability</h3>
                    <p className="text-muted-foreground">
                    Our local teams are available at any time during your stay in all our destinations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ConfIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Confidentiality</h3>
                    <p className="text-muted-foreground">
                    Respect for your privacy is the foundation of our relationship with you.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <WalletIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">The best offer</h3>
                    <p className="text-muted-foreground">
                    We work directly with our owners to ensure you get the fairest prices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              src="/balcon.jpg"
              width="550"
              height="310"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <CarouselDemo />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">They trusted us...</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied clients about the exceptional service and attention to detail they&apos;ve
              experienced.
            </p>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-2 lg:grid-cols-3">
              <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
                <Image
                  src="/icon.png"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold">Francois, Paris, France</h4>
                  <p className="text-sm text-muted-foreground">Villa Naiades</p>
                </div>
                <p className="text-sm text-muted-foreground">
                &quot;Logement conforme à l&apos;annonce beaucoup d&apos;équipements pour la cuisine, il suffit de poser vos valises et de vous régaler avec la vue magnifique, merci à l&apos;hôte pour sa gentillesse, nous recommandons ce logement au top 👍&quot;
                </p>
              </div>
              <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
                <Image
                  src="/icon.png"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold">Ernst, Erlangen, Allemagne</h4>
                  <p className="text-sm text-muted-foreground">Villa Tumulus</p>
                </div>
                <p className="text-sm text-muted-foreground">
                &quot;Spacious villa with exceptionell view in a calm neighborhood. Great amenties!&quot;
                </p>
              </div>
              <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
                <Image
                  src="/icon.png"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold">Jordan, Le Raincy, France</h4>
                  <p className="text-sm text-muted-foreground">Villa Les Tourterelles</p>
                </div>
                <p className="text-sm text-muted-foreground">
                &quot;Shirley et Yoan ont été disponibles et très réactifs à chaques demandes. Ils sont de plus très sympathique et accueillants. Les prestations sont à la hauteur et la propreté était irréprochable dans le logement. Nous vous les conseillons les yeux fermés. Nous referons appel à eux pour nos prochaines vacances dans le sud!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </main>
  </div>
)
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
return (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-9"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 7.5 12"/></svg>
)
}


function ConfIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-face"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
  )
}

function WalletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
  )
}