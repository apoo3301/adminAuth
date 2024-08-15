import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Company</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of passionate individuals dedicated to creating innovative solutions that transform the
                way businesses operate. Our mission is to empower our clients with the tools and expertise they need to
                succeed in the digital age.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/agency/our-guests"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Explore Our Destinations
            </Link>
          </div>
        </div>
        <Image
          src="/balcon.jpg"
          width="700"
          height="500"
          alt="About Us"
          className="mx-auto aspect-[7/5] overflow-hidden rounded-xl object-cover sm:w-full"
        />
      </div>
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-3 lg:gap-16 mt-12">
        <div className="space-y-2 text-center">
          <h3 className="text-3xl font-bold">5+</h3>
          <p className="text-muted-foreground">Years in Business</p>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-3xl font-bold">450+</h3>
          <p className="text-muted-foreground">Satisfied Customers</p>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-3xl font-bold">2</h3>
          <p className="text-muted-foreground">Industry Awards</p>
        </div>
      </div>
    </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to make the lives of second home owners easier by providing them with a whole range of “practical life” services accessible from their main residence.              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Innovative Solutions</h3>
              <p className="text-sm text-muted-foreground">
              The chosen service policy, the selection and involvement of partners as well as the dynamism of the teams have enabled us to quickly become a quality reference in terms of concierge service and connecting Owners - Vacationers on the Golfe.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Exceptional Service</h3>
              <p className="text-sm text-muted-foreground">
              Our concept favoring proximity, availability and responsiveness voluntarily limits our scope of intervention. This also helps us to participate in the development of the local economic fabric by only using known and referenced partners.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Collaborative Approach</h3>
              <p className="text-sm text-muted-foreground">
              With more than 5 years of existence, WH is today a local quality reference in the very specific field of stewardship serving individuals and tenants.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is composed of talented individuals with diverse backgrounds and expertise, all united by a
                shared passion for innovation and excellence.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-sm text-muted-foreground">Co-Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  With over 15 years of experience in the industry, John leads our team with a vision for innovation and
                  growth.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h4 className="text-lg font-semibold">Jane Appleseed</h4>
                <p className="text-sm text-muted-foreground">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground">
                  Jane is a seasoned tech expert who oversees our engineering team and ensures the delivery of
                  cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h4 className="text-lg font-semibold">Sarah Miller</h4>
                <p className="text-sm text-muted-foreground">Head of Design</p>
                <p className="text-sm text-muted-foreground">
                  Sarah&apos;s keen eye for design and user experience ensures our solutions are not only functional, but
                  visually stunning.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h4 className="text-lg font-semibold">Michael Rios</h4>
                <p className="text-sm text-muted-foreground">Lead Developer</p>
                <p className="text-sm text-muted-foreground">
                  Michael&apos;s technical expertise and innovative mindset drive the development of our cutting-edge
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

// « Notre mission est de faciliter la vie de propriétaires de résidences secondaires en leur apportant toute une
//           gamme de services « vie pratique » accessibles depuis leur résidence principale.»
//interior.jpg