"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function ContactDesktop() {
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
    <div className="hidden md:block bg-white relative">
      <div
        className="absolute bottom-0 left-0 right-0 w-full bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/D10-BG.svg)",
          height: "489px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 mt-[100px] mx-[144px]">
        <h2
          className="font-bold"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "80px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Let&apos;s <span style={{ color: "#8CC63F" }}>Talk</span>.
        </h2>

        <div className="mt-[171px] mb-[130px] grid grid-cols-2 gap-[242px]">
          <div>
            <h3
              className="font-bold"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "35px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Tell us more about what you&apos;re building!
            </h3>

            <form onSubmit={handleSubmit} className="mt-[42px]">
              <div
                className="bg-white p-[32px] pb-[23px]"
                style={{
                  borderRadius: "18px",
                  border: "1px solid #CACACA",
                }}
              >
                <div
                  className="font-normal text-[21px] leading-[100%]"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    letterSpacing: "0%",
                    color: " #050505",
                    marginBottom: "10px",
                  }}
                >
                  Your Name
                </div>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="standard"
                  sx={{
                    marginBottom: "24px",
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#CACACA",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#8CC63F",
                    },
                    "& .MuiInputLabel-root": {
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    },
                    "& .MuiInputBase-input": {
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      color: "#8CC63F",
                    },
                  }}
                />
                <div
                  className="font-normal text-[21px] leading-[100%]"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    letterSpacing: "0%",
                    color: " #050505",
                    marginBottom: "10px",
                  }}
                >
                  Your E-mail
                </div>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="standard"
                  sx={{
                    marginBottom: "24px",
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#CACACA",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#8CC63F",
                    },
                    "& .MuiInputLabel-root": {
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    },
                    "& .MuiInputBase-input": {
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      color: "#8CC63F",
                    },
                  }}
                />
                <div
                  className="font-normal text-[21px] leading-[100%]"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    letterSpacing: "0%",
                    color: " #050505",
                    marginBottom: "10px",
                  }}
                >
                  Your Message
                </div>
                <TextField
                  fullWidth
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#CACACA",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#8CC63F",
                    },
                    "& .MuiInputBase-input": {
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      color: "#8CC63F",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      opacity: 0.7,
                    },
                  }}
                />
              </div>

              <button
                type="submit"
                className="font-normal text-[28px] leading-[100%] text-center mt-[55px]"
                style={{
                  width: "fit-content",
                  height: "70px",
                  borderRadius: "8px",
                  paddingTop: "16px",
                  paddingRight: "60px",
                  paddingBottom: "16px",
                  paddingLeft: "60px",
                  background: "#BEE56E",
                  boxShadow: "7px 7px 0px 0px #81A733",
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  letterSpacing: "0%",
                }}
              >
                Send Message!
              </button>
            </form>
          </div>

          <div className="flex flex-col">
            <div>
              <h3
                className="font-bold"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "35px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                In the neighbourhood?
              </h3>
              <div
                className="mt-[47.86px]"
                style={{
                  width: "15%",
                  borderTop: "2px solid #BEE56E",
                }}
              />
              <p
                className="mt-[42px] font-light"
                style={{
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "27px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                496, 8th main, West wing, Domlur
                <br />
                Extension, Amarjyothi layout,
                <br />
                Bengaluru, Karnataka, 560071
              </p>
            </div>

            <div className="mt-[82.86px]">
              <h3
                className="font-bold"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "35px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                Let&apos;s get to work.
              </h3>
              <div
                className="mt-[39px]"
                style={{
                  width: "15%",
                  borderTop: "2px solid #BEE56E",
                }}
              />
              <p
                className="mt-[33.14px] font-light"
                style={{
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "27px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                imagic@imagiccreatives.com
                <br />
                +91 9990477777
              </p>
            </div>

            <button
              className="font-normal text-[28px] leading-[100%] text-center"
              style={{
                height: "70px",
                borderRadius: "8px",
                paddingTop: "16px",
                paddingRight: "60px",
                paddingBottom: "16px",
                paddingLeft: "60px",
                background: "#BEE56E",
                boxShadow: "7px 7px 0px 0px #81A733",
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                letterSpacing: "0%",
                marginTop: "73px",
                width: "fit-content",
              }}
            >
              Book a Meeting!
            </button>
          </div>
        </div>

        <div
          className="text-center pb-[50px] font-light"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "25px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          © 2025 Imagic Creatives. Designing what&apos;s next.
        </div>
      </div>
    </div>
  );
}
