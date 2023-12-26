"use client"

import { useState } from "react"
import Image from "next/image"
import { ThemeToggle } from "@/theme/theme-toggle"
import { TbArrowRight, TbMenu2, TbX } from "react-icons/tb"

import { Button } from "@/components/ui/button/button"
import { NavMenu } from "@/components/ui/menu/nav-menu"
import {
  Backdrop,
  Modal,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/modal/modal"
import { MobileMenu } from "@/components/mobile-menu"

export const Header = () => {
  const [bookConsultationOpen, setBookConsultationOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-background dark:bg-background-2 fixed left-0 top-0 z-10 w-full shadow-2xl shadow-rose-200/5">
      <header className="container flex items-center justify-between py-2">
        <Image
          src="https://freelancers-hub.ca/wp-content/uploads/2023/02/FH-Logo.png"
          width={200}
          height={20}
          alt="logo"
          className="h-auto w-auto"
        />
        <NavMenu />

        <div className="flex items-center gap-x-4">
          <Button
            onClick={() => setBookConsultationOpen(true)}
            type="button"
            variant="primary"
            className="hidden md:flex"
          >
            Book A Consultation <TbArrowRight strokeWidth="3" />
          </Button>
          <Modal>
            <Backdrop
              open={bookConsultationOpen}
              onClose={() => setBookConsultationOpen(false)}
              className=""
            >
              <ModalContent
                open={bookConsultationOpen}
                className="bg-background-2 absolute right-0 top-0 flex h-screen w-2/4 flex-col gap-y-4 p-8"
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
          <div className="flex xl:hidden">
            <button onClick={() => setMobileMenuOpen(true)}>
              <TbMenu2 size={28} />
            </button>
            <Modal>
              <Backdrop
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className=""
              >
                <ModalContent
                  open={mobileMenuOpen}
                  className="bg-background-2 absolute right-0 top-0 flex h-screen w-1/2 flex-col gap-y-4 p-8"
                >
                  <ModalTrigger
                    onClose={() => setMobileMenuOpen(false)}
                    className="relative flex w-full cursor-pointer justify-end"
                  >
                    <TbX size={28} />
                  </ModalTrigger>

                  {mobileMenuOpen ? <MobileMenu /> : null}
                </ModalContent>
              </Backdrop>
            </Modal>
          </div>
        </div>
      </header>
    </div>
  )
}

// export const SubMenu = () => {}

// export const Megamenu = () => {}
