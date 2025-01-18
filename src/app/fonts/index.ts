import localFont from "next/font/local";

export const monaSpace = localFont({
  src: [
    {
      path: './MonaspaceNeon-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MonaspaceNeon-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './MonaspaceNeon-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './MonaspaceNeon-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})