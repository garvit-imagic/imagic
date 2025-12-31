"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";

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

        <form onSubmit={handleSubmit} className="w-full">
          <div className="pt-[46px]">
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="standard"
              sx={{
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
          </div>

          <button
            type="submit"
            className="font-normal text-center mt-[48px] w-full"
            style={{
              height: "60px",
              borderRadius: "8px",
              paddingTop: "16px",
              paddingRight: "40px",
              paddingBottom: "16px",
              paddingLeft: "40px",
              background: "#BEE56E",
              boxShadow: "5px 5px 0px 0px #81A733",
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Send Message!
          </button>
        </form>

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

        <div
          className="pt-[42px] mx-auto"
          style={{
            width: "15%",
            borderTop: "2px solid #BEE56E",
          }}
        />

        <p
          className="pt-[42.40px] font-light text-center"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            width: "85%",
          }}
        >
          496, 8th main, West wing, Domlur
          <br />
          Extension, Amarjyothi layout,
          <br />
          Bengaluru, Karnataka, 560071
        </p>

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
          Let&apos;s get to work.
        </h3>

        <div
          className="pt-[42px] mx-auto"
          style={{
            width: "15%",
            borderTop: "2px solid #BEE56E",
          }}
        />

        <p
          className="pt-[42.40px] font-light text-center"
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

        <button
          className="font-normal text-center mt-[64.86px] w-full"
          style={{
            height: "60px",
            borderRadius: "8px",
            paddingTop: "16px",
            paddingRight: "40px",
            paddingBottom: "16px",
            paddingLeft: "40px",
            background: "#BEE56E",
            boxShadow: "5px 5px 0px 0px #81A733",
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Book a Meeting!
        </button>

        <div
          className="pt-[120px] pb-[43px] text-center font-light"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "14px",
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

