import type { TextDisplayConfig } from '@/types/text-display';

/**
 * Sample configurations for TextDisplay component
 * Based on the provided design screenshots
 */

// Example 1: "Serious about design" layout
export const seriousAboutDesignConfig: TextDisplayConfig = {
  containerClassName: 'px-[144px] py-[100px]',
  animate: true,
  animationDelay: 0.2,
  rows: [
    {
      containerClassName: 'mb-[40px]',
      lines: [
        {
          segments: [
            {
              text: 'Serious',
              className: 'text-[80px] font-bold leading-[100%] tracking-normal',
            },
          ],
        },
        {
          segments: [
            {
              text: 'about ',
              className: 'text-[80px] font-bold leading-[100%] tracking-normal',
            },
            {
              text: 'design',
              className: 'text-[80px] font-bold leading-[100%] tracking-normal',
            },
          ],
        },
      ],
    },
    {
      containerClassName: 'max-w-[600px] ml-auto',
      lines: [
        {
          segments: [
            {
              text: 'Great work requires the right environment. As seasoned creatives, this team has cultivated a balance of professional stability and creative freedom. ',
              className: 'text-[20px] font-normal leading-[30px] block mb-2',
            },
          ],
        },
        {
          segments: [
            {
              text: 'We call it the logic behind the magic.',
              className: 'text-[20px] font-normal leading-[30px] italic',
            },
          ],
        },
        {
          segments: [
            {
              text: 'While our process handles the details, our ideas have the room to evolve and stay ahead in a changing design world.',
              className: 'text-[20px] font-normal leading-[30px] block mt-4',
            },
          ],
        },
      ],
    },
  ],
};

// Example 2: "But not about ourselves!" layout
export const notAboutOurselvesConfig: TextDisplayConfig = {
  containerClassName: 'px-[144px] py-[80px]',
  animate: true,
  animationDelay: 0.3,
  rows: [
    {
      lines: [
        {
          segments: [
            {
              text: 'But not',
              className: 'text-[80px] font-bold leading-[100%] tracking-normal',
            },
            {
              text: ' about ',
              className: 'text-[80px] font-normal leading-[100%] tracking-normal',
            },
            {
              text: 'ourselves',
              className: 'text-[80px] font-bold leading-[100%] tracking-normal',
            },
            {
              text: ' !',
              className: 'text-[80px] font-normal leading-[100%] tracking-normal',
            },
          ],
        },
      ],
    },
  ],
};

// Example 3: "We're driven by a simple truth" layout
export const simpleTruthConfig: TextDisplayConfig = {
  containerClassName: 'px-[144px] py-[120px] flex justify-center items-center min-h-[400px]',
  animate: true,
  animationDelay: 0.2,
  rows: [
    {
      lines: [
        {
          segments: [
            {
              text: "We're driven by a ",
              className: 'text-[64px] font-normal leading-[120%] tracking-normal',
            },
            {
              text: 'simple truth',
              className: 'text-[64px] font-normal leading-[120%] tracking-normal italic',
            },
            {
              text: ':',
              className: 'text-[64px] font-normal leading-[120%] tracking-normal',
            },
          ],
        },
      ],
    },
  ],
};

// Example 4: "Great work starts with open conversations" layout
export const openConversationsConfig: TextDisplayConfig = {
  containerClassName: 'px-[144px] py-[100px]',
  animate: true,
  animationDelay: 0.2,
  rows: [
    {
      containerClassName: 'mb-[60px]',
      lines: [
        {
          segments: [
            {
              text: 'Great work starts with',
              className: 'text-[48px] font-normal leading-[130%] tracking-normal block',
            },
          ],
        },
        {
          segments: [
            {
              text: 'open conversations',
              className: 'text-[48px] font-bold leading-[130%] tracking-normal',
            },
            {
              text: '.',
              className: 'text-[48px] font-normal leading-[130%] tracking-normal',
            },
          ],
        },
      ],
    },
    {
      containerClassName: 'max-w-[700px] ml-auto',
      lines: [
        {
          segments: [
            {
              text: 'We take the time to truly understand your goals and the nuances that matter most. By asking the right questions, we ensure every detail has a purpose. Our process is thoughtful but never complicated—built on clear decisions and focused action from start to finish.',
              className: 'text-[18px] font-normal leading-[27px] block mb-8',
            },
          ],
        },
        {
          segments: [
            {
              text: "That's how we create meaningful impact and deliver measurable results you can count on every time.",
              className: 'text-[16px] font-normal leading-[24px]',
            },
          ],
        },
      ],
    },
  ],
};

// Example 5: "Let's make it work!" layout
export const letsMakeItWorkConfig: TextDisplayConfig = {
  containerClassName: 'px-[144px] py-[120px] flex justify-end items-center min-h-[400px]',
  animate: true,
  animationDelay: 0.3,
  rows: [
    {
      className: 'text-right',
      lines: [
        {
          segments: [
            {
              text: "Let's make",
              className: 'text-[72px] font-normal leading-[110%] tracking-normal block',
            },
          ],
        },
        {
          segments: [
            {
              text: 'it work !',
              className: 'text-[72px] font-bold leading-[110%] tracking-normal',
            },
          ],
        },
      ],
    },
  ],
};

// Mobile versions (responsive configs)
export const seriousAboutDesignConfigMobile: TextDisplayConfig = {
  containerClassName: 'px-[45px] py-[60px]',
  animate: true,
  animationDelay: 0.2,
  rows: [
    {
      containerClassName: 'mb-[30px]',
      lines: [
        {
          segments: [
            {
              text: 'Serious',
              className: 'text-[32px] font-bold leading-[100%] tracking-normal',
            },
          ],
        },
        {
          segments: [
            {
              text: 'about ',
              className: 'text-[32px] font-bold leading-[100%] tracking-normal',
            },
            {
              text: 'design',
              className: 'text-[32px] font-bold leading-[100%] tracking-normal',
            },
          ],
        },
      ],
    },
    {
      containerClassName: 'mt-[40px]',
      lines: [
        {
          segments: [
            {
              text: 'Great work requires the right environment. As seasoned creatives, this team has cultivated a balance of professional stability and creative freedom. ',
              className: 'text-[14px] font-normal leading-[21px] block mb-2',
            },
          ],
        },
        {
          segments: [
            {
              text: 'We call it the logic behind the magic.',
              className: 'text-[14px] font-normal leading-[21px] italic',
            },
          ],
        },
        {
          segments: [
            {
              text: 'While our process handles the details, our ideas have the room to evolve and stay ahead in a changing design world.',
              className: 'text-[14px] font-normal leading-[21px] block mt-3',
            },
          ],
        },
      ],
    },
  ],
};
