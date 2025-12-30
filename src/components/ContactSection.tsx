'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from './ui/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-gradient-to-br from-primary/10 via-white to-primary/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Talk.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Tell us more about what you're building?
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      backgroundColor: 'white',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      backgroundColor: 'white',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      backgroundColor: 'white',
                    },
                  }}
                />
                <Button variant="primary" size="lg" className="mt-4">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                In the neighborhood?
              </h3>
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
                <div>
                  <p className="text-sm text-text-secondary mb-2">Visit us:</p>
                  <p className="text-base font-medium">
                    123, Tech Park, Silicon Valley
                    <br />
                    California, USA
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">Email us:</p>
                  <p className="text-base font-medium">hello@imagic.com</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">Call us:</p>
                  <p className="text-base font-medium">+1 (555) 123-4567</p>
                </div>
                <Button variant="secondary" size="md" className="mt-4">
                  Find Us on Map
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold mb-2">Let's get social</h4>
              <p className="text-sm text-text-secondary">
                Follow us on social media to stay updated with our latest projects and innovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

