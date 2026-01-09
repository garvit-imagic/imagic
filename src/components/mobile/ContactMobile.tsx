"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import ScrollAnimation from "../ScrollAnimation";

export default function ContactMobile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="md:hidden bg-white relative">
      <div
        className="absolute bottom-0 left-0 right-0 w-full bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/M9-BG.svg)",
          height: "300px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-[24px]">
        <ScrollAnimation direction="up" distance={18} delay={0.2}>
          <h2
            className="pt-[100px] font-bold text-center"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Let&apos;s <span style={{ color: "#8CC63F" }}>Talk.</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={16} delay={0.28}>
          <h3
            className="pt-[56px] pb-[27px] font-bold text-center"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Tell us more about what you&apos;re building!
          </h3>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={16} delay={0.34} className="w-full">
          <form onSubmit={handleSubmit} className="w-full  px-[24px]">
            <div className="pt-[46px]">
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    marginTop: "40px",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#CACACA",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#8CC63F",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    color: "#000000",
                    fontSize: "18px",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000000",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    color: "#8CC63F",
                  },
                }}
              />
            </div>

            <div className="pt-[46px]">
              <TextField
                fullWidth
                label="Your E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    marginTop: "40px",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#CACACA",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#8CC63F",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    color: "#000000",
                    fontSize: "18px",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000000",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    color: "#8CC63F",
                  },
                }}
              />
            </div>

            <div className="pt-[46px]">
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    marginTop: "40px",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#CACACA",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#8CC63F",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    color: "#000000",
                    fontSize: "18px",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000000",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    color: "#8CC63F",
                  },
                }}
              />
            </div>

            <div className="flex justify-center mt-[48px]">
              <button
                type="submit"
                className="font-normal text-center bg-[#BEE56E] transition-colors hover:bg-[#BAED50]"
                style={{
                  height: "60px",
                  borderRadius: "8px",
                  paddingTop: "16px",
                  paddingRight: "40px",
                  paddingBottom: "16px",
                  paddingLeft: "40px",
                  boxShadow: "5px 5px 0px 0px #81A733",
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                Send Message!
              </button>
            </div>
          </form>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={16} delay={0.4}>
          <h3
            className="pt-[101px] font-bold text-center"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "90%",
            }}
          >
            In the neighbourhood?
          </h3>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={14} delay={0.46}>
          <div
            className="mt-[42px] mx-auto"
            style={{
              width: "25%",
              borderTop: "2px solid #BEE56E",
            }}
          />
        </ScrollAnimation>

        <ScrollAnimation
          direction="up"
          distance={14}
          delay={0.52}
          className="w-full self-stretch"
        >
          <p
            className="mt-[42.40px] font-light text-center"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "100%",
            }}
          >
            496, 8th main, West wing, Domlur
            <br />
            Extension, Amarjyothi layout,
            <br />
            Bengaluru, Karnataka, 560071
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          direction="up"
          distance={16}
          delay={0.58}
          className="w-full self-stretch"
        >
          <h3
            className="mt-[101px] font-bold text-center"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "100%",
            }}
          >
            Let&apos;s get to work.
          </h3>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={14} delay={0.64}>
          <div
            className="mt-[42px] mx-auto"
            style={{
              width: "25%",
              borderTop: "2px solid #BEE56E",
            }}
          />
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={14} delay={0.7}>
          <p
            className="mt-[42.40px] font-light text-center"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "85%",
            }}
          >
            imagic@imagiccreatives.com
            <br />
            +91 9990477777
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={14} delay={0.76}>
          <a
            href="https://calendly.com/ashishkohli7787/30min"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="font-normal text-center mt-[64.86px] bg-[#BEE56E] transition-colors hover:bg-[#BAED50]"
              style={{
                height: "60px",
                borderRadius: "8px",
                paddingTop: "16px",
                paddingRight: "40px",
                paddingBottom: "16px",
                paddingLeft: "40px",
                boxShadow: "5px 5px 0px 0px #81A733",
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Book a Meeting!
            </button>
          </a>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={12} delay={0.82}>
          <div
            className="mt-[120px] pb-[43px] text-center font-light"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            © 2025 Imagic Creatives. Designing what&apos;s next.
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
