import ankaraUniLogo from '../assets/img/ankara_uni_logo.png';

export const educationData = [
  {
    type: 'summary',
    logo: ankaraUniLogo,
    degree: 'B.Sc. in Computer Engineering',
    school: 'Ankara University',
    program: '100% English Program',
    date: 'Sep 2014 – Jun 2019'
  },
  {
    type: 'details',
    highlights: [
      {
        title: 'Graduation Project',
        description:
          'OCR-based assistive app converting real-time images into audio using Python, Tesseract OCR, and gTTS.'
      },
      {
        title: 'Google Android Scholarship',
        description: 'Completed the program and developed multiple Android applications.'
      },
      {
        title: 'Global Volunteer Program',
        description: 'Contributed to English education in Nanjing, China through AIESEC.'
      }
    ],
    coursework: 'Data Structures, Algorithms, Pattern Recognition, Blockchain',
    gpa: '3.6 / 4.0'
  }
];
