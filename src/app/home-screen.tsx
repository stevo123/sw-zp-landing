"use client";

import {
    ArrowRight,
    BarChartSquare01,
    BookOpen01,
    Calendar,
    CheckCircle,
    Clock,
    MarkerPin01,
    PlayCircle,
    Settings01,
    Stars02,
    ThumbsUp,
    Users01,
} from "@untitledui/icons";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const HomeScreen = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const videoFrameRef = useRef<HTMLIFrameElement | null>(null);
    const openDemo = () => setIsDemoOpen(true);
    const scrollToHighlights = () => {
        document.getElementById("integration-highlights")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const playTestimonial = () => {
        document.getElementById("testimonial-video")?.scrollIntoView({ behavior: "smooth", block: "center" });
        videoFrameRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*",
        );
    };

    useEffect(() => {
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        const baseSrc = "https://www.youtube.com/embed/Ke7OnCvC7-o";
        const query = new URLSearchParams({
            controls: "1",
            rel: "0",
            enablejsapi: "1",
            origin,
        });
        setVideoSrc(`${baseSrc}?${query.toString()}`);
    }, []);

    return (
        <div className="bg-primary">
            <section className="bg-primary-solid px-4 py-16 md:px-8 lg:px-16 lg:py-24">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
                    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div className="flex flex-col items-start gap-8">
                        <div className="flex flex-wrap items-center gap-3 text-secondary_on-brand">
                            <div className="flex items-center gap-2">
                                <img src="/images/content/logo-sw.svg" alt="SugarWOD" className="h-7 w-auto" />
                            </div>
                            <span className="text-sm text-tertiary_on-brand">+</span>
                            <div className="flex items-center gap-2">
                                <img src="/images/content/logo-zp.svg" alt="Zen Planner" className="h-7 w-auto" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="text-balance text-display-md font-bold text-primary_on-brand md:text-display-lg">
                                Simplify gym operations and maximize member engagement
                            </h1>
                            <p className="max-w-xl text-lg text-white/80">
                                Give your members a single platform for booking, attendance tracking, and coaching insights with a
                                unified SugarWOD + Zen Planner experience.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button size="lg" color="brand-secondary" iconTrailing={ArrowRight} onPress={openDemo}>
                                Demo the integration
                            </Button>
                            <Button size="lg" color="secondary-on-brand" onPress={scrollToHighlights} className="hover:bg-primary/10">
                                Learn more
                            </Button>
                        </div>

                        </div>

                        <div>
                            <img
                                src="/images/content/device-looking.jpg"
                                alt="Product preview"
                                className="w-full rounded-[16px] bg-primary shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="flex w-full flex-wrap gap-8">
                        <div className="inline-flex items-center gap-3">
                            <FeaturedIcon icon={BookOpen01} size="md" color="brand" theme="light" />
                            <div>
                                <p className="font-semibold text-primary_on-brand">Manage classes</p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-3">
                            <FeaturedIcon icon={Calendar} size="md" color="brand" theme="light" />
                            <div>
                                <p className="font-semibold text-primary_on-brand">Streamline scheduling</p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-3">
                            <FeaturedIcon icon={Stars02} size="md" color="brand" theme="light" />
                            <div>
                                <p className="font-semibold text-primary_on-brand">Boost engagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="integration-highlights" className="px-4 py-16 md:px-8 lg:px-16 lg:py-24">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
                    <div className="flex flex-col gap-8 lg:w-[60vw] lg:pr-12">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-balance text-display-sm font-bold text-primary md:text-display-md">
                                Powerful Tools to Save Time and Grow Member Engagement
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <CheckCircle className="mt-1 size-6 text-fg-brand-primary" aria-hidden="true" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-primary">Easily Manage Classes and Reservations</p>
                                    <p className="text-base text-tertiary">
                                        One-click reservations and waitlists make it simple for members to book, cancel, or join classes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <CheckCircle className="mt-1 size-6 text-fg-brand-primary" aria-hidden="true" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-primary">Streamlined Scheduling</p>
                                    <p className="text-base text-tertiary">
                                        Display your gym&apos;s schedule with clear, up-to-date information for athletes to view anytime.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <CheckCircle className="mt-1 size-6 text-fg-brand-primary" aria-hidden="true" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-primary">Boost Engagement with Personalized Experiences</p>
                                    <p className="text-base text-tertiary">
                                        Automate class bookings, workout tracking, and community interactions all within one platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[40vw]">
                        <img
                            src="/images/content/Images-box.png"
                            alt="Membership and scheduling overview"
                            className="mx-auto h-auto max-w-full lg:w-full"
                        />
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-secondary px-4 py-16 md:px-8 lg:px-16 lg:py-24">
                <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/content/angled-bg.png')", opacity: 0.03 }}
                    aria-hidden="true"
                />
                <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12">
                    <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
                        <h2 className="text-balance text-display-sm font-bold text-primary md:text-display-md">
                            Streamline operations and build a stronger community
                        </h2>
                    </div>

                    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-6">
                        <div className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-lg lg:col-span-2">
                            <FeaturedIcon icon={Settings01} size="md" color="brand" theme="light" />
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold text-primary">One platform for all your gym needs</p>
                                <p className="text-tertiary">
                                    Manage classes, reservations, and workouts all from one integrated platform.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-lg lg:col-span-2">
                            <FeaturedIcon icon={Clock} size="md" color="brand" theme="light" />
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold text-primary">Automate and save time</p>
                                <p className="text-tertiary">
                                    Automate member syncing, class bookings, and payment processing.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-lg lg:col-span-2">
                            <FeaturedIcon icon={Users01} size="md" color="brand" theme="light" />
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold text-primary">Create a thriving community</p>
                                <p className="text-tertiary">
                                    Use workout tracking, whiteboards, and community comments to keep members connected.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-lg lg:col-span-2 lg:col-start-2">
                            <FeaturedIcon icon={BarChartSquare01} size="md" color="brand" theme="light" />
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold text-primary">Make data-driven decisions</p>
                                <p className="text-tertiary">
                                    Leverage real-time insights to optimize class schedules and membership pricing.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-lg lg:col-span-2">
                            <FeaturedIcon icon={ThumbsUp} size="md" color="brand" theme="light" />
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold text-primary">Easy transition and onboarding</p>
                                <p className="text-tertiary">
                                    Switching is easy with onboarding support, plus we&apos;ll import your member data.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Button size="lg" color="secondary-brand-outline" onPress={openDemo}>
                        Demo the integration
                    </Button>
                </div>
            </section>

            <section className="bg-brand-secondary-solid px-4 py-16 md:px-8 lg:px-16 lg:py-24">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
                    <h2 className="text-balance text-center text-display-sm font-bold text-white md:text-display-md">
                        Success Stories from Gym Owners Like You
                    </h2>
                    <div className="grid w-full gap-12 lg:grid-cols-[55%_45%] lg:items-center">
                    <div className="w-full">
                        <div id="testimonial-video" className="relative aspect-video overflow-hidden rounded-2xl bg-primary shadow-lg">
                            {videoSrc ? (
                                <iframe
                                    ref={videoFrameRef}
                                    className="h-full w-full"
                                    src={videoSrc}
                                    title="Gym owner testimonial video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle className="size-10 text-brand-secondary" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-6 lg:pl-6">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Featured</p>
                            <h3 className="text-balance text-display-xs font-bold text-white md:text-display-sm">
                                A Game-Changer for CrossFit Identity
                            </h3>
                            <p className="text-lg text-white/80">
                                “We&apos;ve been an affiliate for over 10 years, and using SugarWOD and Zen Planner together gives us the best of
                                both worlds. Zen Planner helps manage member data, and SugarWOD adds fun, interactivity, and easy communication
                                between members. It&apos;s intuitive and user-friendly.”
                            </p>
                        </div>

                        <div className="flex flex-col gap-1 text-white">
                            <p className="font-semibold text-white">Brandon Wallin, Owner</p>
                            <p className="text-white">CrossFit Identity, Atlanta, GA</p>
                        </div>

                        <div>
                            <Button size="lg" color="secondary-on-brand" className="hover:bg-primary/10" onPress={playTestimonial}>
                                Watch Testimonial
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-secondary bg-primary p-6 shadow-lg">
                        <p className="text-base text-tertiary">
                            “SugarWOD and Zen Planner have made my life so much easier. Having one app to schedule everyone saves time,
                            and it&apos;s been great for my business growth. I love how everything runs through one platform instead of using
                            multiple apps.”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary">
                                <MarkerPin01 className="size-5 text-fg-brand-secondary" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">Mitchell Klopp, Owner</p>
                                <p className="text-sm text-tertiary">CrossFit Woolly Mammoth - Mequon, Wisconsin</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-secondary bg-primary p-6 shadow-lg">
                        <p className="text-base text-tertiary">
                            “We cut our weekly admin time in half and our coaches can focus on members instead of spreadsheets. Class
                            waitlists fill themselves, and athletes actually show up because the reminders are built in.”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary">
                                <MarkerPin01 className="size-5 text-fg-brand-secondary" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">Sarah Whitaker, Owner</p>
                                <p className="text-sm text-tertiary">CrossFit Northline - Grand Rapids, Michigan</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-secondary bg-primary p-6 shadow-lg">
                        <p className="text-base text-tertiary">
                            “Members love seeing their workouts, scores, and PRs right alongside their class schedule. It feels like we
                            leveled up our entire experience without adding any extra staff.”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary">
                                <MarkerPin01 className="size-5 text-fg-brand-secondary" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">Jason Reyes, Co-Owner</p>
                                <p className="text-sm text-tertiary">CrossFit Harbor District - San Diego, California</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="px-4 py-16 md:px-8 lg:px-16 lg:py-24">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-balance text-display-sm font-bold text-primary md:text-display-md">
                            See How Zen Planner Can Transform Your Gym
                        </h2>
                        <p className="text-lg text-tertiary">
                            Simplify gym management and boost member engagement. Book your demo today!
                        </p>
                    </div>
                    <Button size="lg" color="brand-secondary" onPress={openDemo}>
                        Demo the Integration
                    </Button>
                </div>
            </section>

            <footer className="bg-primary-solid px-4 py-8 md:px-8 lg:px-16">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/images/content/logo-sw.svg" alt="SugarWOD" className="h-7 w-auto" />
                        <span className="text-sm text-tertiary_on-brand">+</span>
                        <img src="/images/content/logo-zp.svg" alt="Zen Planner" className="h-7 w-auto" />
                    </div>
                    <p className="text-sm text-tertiary_on-brand">© Copyright All Rights Reserved 2024</p>
                </div>
            </footer>

            <ModalOverlay
                isDismissable
                isOpen={isDemoOpen}
                onOpenChange={setIsDemoOpen}
                className="items-stretch justify-stretch overflow-hidden bg-primary-solid p-0 backdrop-blur-none"
            >
                <Modal className="h-full max-w-none">
                    <Dialog className="h-full">
                        <div className="relative h-dvh w-full bg-primary-solid">
                            <div className="absolute inset-0 bg-primary-solid" aria-hidden="true" />
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-10"
                                style={{
                                    backgroundImage: "url('/images/content/sugarwod-lifter2.jpg')",
                                    mixBlendMode: "luminosity",
                                }}
                                aria-hidden="true"
                            />

                            <CloseButton className="absolute right-6 top-6 z-20" size="md" theme="dark" slot="close" />

                            <div className="absolute inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center px-4 py-10">
                                    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
                                        <div className="flex w-full flex-col gap-6 text-primary_on-brand lg:max-w-[46%]">
                                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary_on-brand">Book a demo</p>
                                            <h2 className="text-balance text-display-sm font-bold text-primary_on-brand md:text-display-md">
                                                Simplify your gym operations and maximize member engagement with Zen Planner
                                            </h2>
                                            <div className="flex flex-col gap-3 text-sm text-tertiary_on-brand">
                                                <div className="flex items-start gap-3">
                                                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary_on-brand">
                                                        1
                                                    </span>
                                                    <p>Fill out the form for a quick response.</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary_on-brand">
                                                        2
                                                    </span>
                                                    <p>Get a personalized demo to see the fit.</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary_on-brand">
                                                        3
                                                    </span>
                                                    <p>Enjoy the benefits and watch your club grow.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full max-w-md rounded-2xl bg-primary p-6 shadow-xl lg:max-w-[420px]">
                                            <div className="flex flex-col gap-4">
                                                <div className="grid gap-4 sm:grid-cols-2">
                                                    <Input label="First name" placeholder="First name" />
                                                    <Input label="Last name" placeholder="Last name" />
                                                </div>
                                                <Input label="Email" placeholder="you@company.com" type="email" />
                                                <Input label="Company" placeholder="Company name" />
                                                <Input label="Phone number" placeholder="+1 (555) 000-0000" type="tel" />
                                                <Checkbox
                                                    label="I agree to receive SMS text messages from ZenPlanner."
                                                    hint={
                                                        <span>
                                                            Message and data rates may apply. Message frequency varies. Reply STOP to opt-out at any time.{" "}
                                                            <a
                                                                href="https://zenplanner.com/terms-of-use/"
                                                                className="text-brand-secondary underline"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                Terms and Conditions
                                                            </a>
                                                            .{" "}
                                                            <a
                                                                href="https://www.daxko.com/privacy/"
                                                                className="text-brand-secondary underline"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                Privacy Policy
                                                            </a>
                                                            .
                                                        </span>
                                                    }
                                                />
                                                <Button size="lg" color="brand-secondary" className="w-full">
                                                    Demo the Integration
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </div>
    );
};
