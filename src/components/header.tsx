"use client"

import { useState } from "react"
import Image from "next/image"
import { ThemeToggle } from "@/theme/theme-toggle"
import { TbArrowRight, TbX } from "react-icons/tb"

import { NavMenu } from "@/components/menu/nav-menu"
import {
  Backdrop,
  Modal,
  ModalContent,
  ModalTrigger,
} from "@/components/modal/modal"

export const Header = () => {
  const [bookConsultationOpen, setBookConsultationOpen] = useState(false)

  return (
    <div className="bg-background dark:bg-background-2 absolute left-0 top-0 w-full shadow">
      <header className="container flex items-center justify-between py-2">
        <Image
          src="https://freelancers-hub.ca/wp-content/uploads/2023/02/FH-Logo.png"
          width={200}
          height={20}
          alt="logo"
        />
        <NavMenu />

        <div className="hidden items-center gap-x-4 lg:flex">
          <button
            onClick={() => setBookConsultationOpen(true)}
            className="bg-accent hover:bg-accent-hover text-accent-foreground flex h-full items-center gap-x-2 rounded px-6 py-3 font-semibold transition"
          >
            Book A Consultation <TbArrowRight strokeWidth="3" />
          </button>
          <Modal>
            <Backdrop
              open={bookConsultationOpen}
              onClose={() => setBookConsultationOpen(false)}
              className=""
            >
              <ModalContent
                open={bookConsultationOpen}
                className="bg-background-2 absolute right-0 top-0 flex h-screen w-1/4 flex-col gap-y-4 p-8"
              >
                <ModalTrigger
                  onClose={() => setBookConsultationOpen(false)}
                  className="relative flex w-full cursor-pointer justify-end"
                >
                  <TbX size={28} />
                </ModalTrigger>
                <h4 className="text-4xl font-semibold">Book A Consultation</h4>
                <p>
                  Schedule a consultation with our experts to discuss your
                  business goals and get started on the path to success.
                </p>

                {bookConsultationOpen ? (
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/freelancers-hub/book-a-meeting?hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=f8fafc&amp;text_color=020617&amp;primary_color=e11d48"
                    style={{
                      position: "relative",
                      minWidth: "320px",
                      height: "630px",
                      marginTop: "1rem",
                    }}
                    data-processed="true"
                  >
                    <div className="calendly-spinner">
                      <div className="calendly-bounce1"></div>
                      <div className="calendly-bounce2"></div>
                      <div className="calendly-bounce3"></div>
                    </div>
                    <iframe
                      src="https://calendly.com/freelancers-hub/book-a-meeting?embed_domain=freelancers-hub.ca&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=f8fafc&amp;text_color=020617&amp;primary_color=e11d48"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Select a Date &amp; Time - Calendly"
                      style={{
                        borderRadius: "6px",
                      }}
                    ></iframe>
                  </div>
                ) : null}
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
              </ModalContent>
            </Backdrop>
          </Modal>
          <ThemeToggle />
        </div>
      </header>
    </div>
  )
}

// export const SubMenu = () => {}

// export const Megamenu = () => {}
