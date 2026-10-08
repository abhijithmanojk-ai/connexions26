export interface EventDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  formatType: string; // 'Duo event' | 'Trio event' | 'Individual event' | 'Online submission'
  venue: string;
  timing: string;
  ferrariOrRedBull: 'Ferrari' | 'RedBull';
  googleFormUrl: string;
  tagline: string;
  theme?: string;
  rules: string[];
  coordinators: {
    name: string;
    phone: string;
  }[];
}

export interface CircuitScheduleEntry {
  type: string;
  eventName: string;
  venue: string;
  timing: string;
  isCeremony?: boolean;
  isOnline?: boolean;
}

export const RULEBOOK_GOOGLE_DRIVE_URL = 'https://drive.google.com/file/d/1QfKSz4uDY1nHVATFo5ggR3NAApsrtOL7/view?usp=sharing';

// Exact General Rules from Page 3 of official rulebook
export const OFFICIAL_GENERAL_RULES = [
  'Only Registered participants are allowed to take part in the event.',
  'Plagiarism, cheating, or use of unfair means is strictly prohibited.',
  'Judges Decision will be final.',
  'Participants are expected to maintain decorum throughout the event.',
  'Any form of vulgarity, disrespect, misbehaviour and violation of college rules will lead to immediate disqualification.',
  'Usage of foul language is not allowed.',
  'Late submissions will not be considered.'
];

// Head Co-ordinators
export const HEAD_COORDINATORS = [
  { role: 'PRESIDENT', name: 'Tejaswi Diwakar', phone: '9363032704' },
  { role: 'PRESIDENT', name: 'Barath M', phone: '6379483379' },
  { role: 'VICE - PRESIDENT', name: 'Ritvik Ram', phone: '9840182438' },
  { role: 'CULTURAL SECRETARY', name: 'Abhijith', phone: '9345625509' },
  { role: 'ASSISTANT CULTURAL SECRETARY', name: 'Pradeep', phone: '9444073752' }
];

export const FACULTY_COORDINATORS = [
  { role: 'Faculty Co-ordinator', name: 'Dr. K. Tamilselvi', designation: 'Assistant Professor' },
  { role: 'Faculty Co-ordinator', name: 'Mr. Balaji U', designation: 'Assistant Professor' }
];

export const COLLEGE_DIGNITARIES = {
  collegeName: 'DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE (AUTONOMOUS)',
  accreditation: 'Reaccredited With A++ Grade by NAAC (3rd Cycle) | College with Potential for Excellence, Linguistic Minority Institution',
  location: 'Arumbakkam, Chennai - 600 106 (Affiliated to University of Madras)',
  department: 'DEPARTMENT OF B.COM ACCOUNTING AND FINANCE',
  presentedBy: 'Lucafama Presents',
  hod: 'Dr. D. Jayaprakash (Head of the Department i/c)',
  principal: 'Capt. Dr. S. Santhosh Baboo (Principal)',
  secretary: 'Shri. Ashok Kumar Mundhra (Secretary)',
  dateVenue: '14TH OCTOBER 2026, DWARAKA AUDITORIUM, 9:00 AM ONWARDS'
};

// Exact 8 Events from official PDF (Pages 4-19)
export const INITIAL_EVENTS: EventDetail[] = [
  {
    id: 'driver-duel',
    number: '01',
    title: 'Drivers Duel',
    subtitle: 'Debate',
    formatType: 'Duo event',
    venue: 'KB Seminar Hall',
    timing: '10:30 AM - 12:30 PM',
    ferrariOrRedBull: 'RedBull',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf1taDVQVrHMvooBoxV1TeDL85lO86r7Q7ZIiO2PEKDebLGiw/viewform?usp=header',
    tagline: 'Lights out, minds on! Enter the debate grid where sharp arguments are your DRS, confidence is your downforce, and every point takes you closer to the podium. Challenge, counter, and defend your position — because in this race, only the strongest argument crosses the finish line!',
    rules: [
      'It is a duo event.',
      'Time allotted: 2 minutes per speaker.',
      'Participants will engage in structured debate and the topic will be given on the spot.',
      'Participants are evaluated based on argument strength, rebuttal, effectiveness, presentation style and spontaneity.',
      'Any form of vulgarity will lead to disqualification.',
      'The judge\'s decision will be final.'
    ],
    coordinators: [
      { name: 'Abhijith', phone: '9345625509' },
      { name: 'Drithi', phone: '8072201206' }
    ]
  },
  {
    id: 'grid-quiz',
    number: '02',
    title: 'Grid Quiz',
    subtitle: 'Quiz',
    formatType: 'Duo event',
    venue: 'Round 1: Classroom | Round 2: KB Seminar Hall',
    timing: 'R1: 11:30 AM - 12:30 PM | R2: 1:00 PM - 2:00 PM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdRHgfVgnK8xxTCfXlmzwpmLU_jPS1xneZV22b8EMw3bnxE4Q/viewform?usp=header',
    tagline: 'Ready for lights out? Put your knowledge on the grid and race through questions that test how fast you can think. Stay sharp, trust your instincts, and don\'t let the competition pull ahead. Every question counts. Every second matters.',
    rules: [
      'It is a duo event.',
      'There will be two rounds.',
      'The preliminary round will be a written round where the participants will be given 20 minutes to answer questions relating to: movies (fantasy fandoms), sports, automotive.',
      'The second round will be revealed on the spot.',
      'Any form of vulgarity will lead to disqualification.',
      'The judge\'s decision will be final.'
    ],
    coordinators: [
      { name: 'Vruthika', phone: '9840090428' },
      { name: 'Thirukumaran', phone: '8015157606' }
    ]
  },
  {
    id: 'race-investigation',
    number: '03',
    title: 'Race Investigation',
    subtitle: 'Crime Analysis',
    formatType: 'Trio event',
    venue: 'Classroom',
    timing: '10:30 AM - 1:30 PM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdmRjjlV8vkv7sTmjuzWZCKaxoENglQS7rEYxJn6IK0LAwnZg/viewform?usp=header',
    tagline: 'Every crime leaves a trail. Put your instincts to the test, connect the clues, and piece together the story before someone else cracks the case. Think sharp, read between the lines, and race to the truth.',
    rules: [
      'It is a trio event.',
      'The event consists of two rounds and the nature of rounds will be revealed on spot.',
      'Usage of electronic devices is strictly prohibited.',
      'Any form of vulgarity will lead to disqualification.',
      'The judge\'s decision will be final.'
    ],
    coordinators: [
      { name: 'Sathya', phone: '9962279521' },
      { name: 'Kamesh B', phone: '9940247666' },
      { name: 'Rakshana', phone: '9345461800' }
    ]
  },
  {
    id: 'the-last-lap',
    number: '04',
    title: 'The Last Lap',
    subtitle: 'Shipwreck',
    formatType: 'Individual event',
    venue: 'Classroom',
    timing: '10:30 AM - 1:00 PM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeQJTyI9_8_PxXlMdVfR7fevx44pSeqJ4OypBQeWn2lqEz0JA/viewform?usp=header',
    tagline: 'The grid is set, the pressure is high, and there\'s no room for a pit stop! Defend your character, outsmart the competition, and race your way to survival. Think fast, overtake with your arguments, and prove you deserve to stay in the race!',
    rules: [
      'It is an individual event.',
      'Participants are assigned characters on the spot.',
      'Participants must convince the captain for the life jacket.',
      'Participants are evaluated based on humour, spontaneity and creativity.',
      'Any form of vulgarity will lead to disqualification.',
      'The judge\'s decision will be final.'
    ],
    coordinators: [
      { name: 'Vineeth', phone: '7305164053' },
      { name: 'Keerti', phone: '9080771419' }
    ]
  },
  {
    id: 'paddock-tv',
    number: '05',
    title: 'Paddock TV',
    subtitle: 'Green Screen',
    formatType: 'Individual event',
    venue: 'Dwaraka',
    timing: '10:30 AM - 1:00 PM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeQelvFtVNgBklNwlAnskUrvBwmKyJeCI7Z7ocXtEopWETW7g/viewform?usp=header',
    tagline: 'Where the grid is set, the cameras are rolling, and the pressure is on! Decode the scene, catch every clue, and make your move before the clock runs out. Stay sharp, find the racing line, and overtake the competition with your instincts!',
    rules: [
      'It is an individual event.',
      'Participants are blindfolded.',
      'A muted video clip will be played on the screen.',
      'Clips can be from movies, songs, cartoons, speeches, etc.',
      'Judges will provide clues during the clip.',
      'Participants must narrate according to the clues and guess the clip.',
      'Participants will be evaluated based on their narration skills and humour.',
      'Any form of vulgarity will lead to disqualification.',
      'The judge\'s Decision will be final.'
    ],
    coordinators: [
      { name: 'Abhinav', phone: '7397427829' }
    ]
  },
  {
    id: 'pole-position',
    number: '06',
    title: 'Pole Position',
    subtitle: 'Title Event',
    formatType: 'Individual event',
    venue: 'Dwaraka',
    timing: '1:30 PM - 3:30 PM',
    ferrariOrRedBull: 'RedBull',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfJx2i9RfOhpU6DTJAttmj_wO9fXMsfpCtCovw7a9b1fo2Dgw/viewform?usp=header',
    tagline: 'Lights out, and we\'re racing! Step onto the grid, bring your confidence, personality, and talent, and fight your way through every round. With eliminations at each stage, only the strongest drivers will reach the final lap and compete for the ultimate titles — Mr. & Ms. Connexions!',
    rules: [
      'It is an individual event.',
      'Participants will progress through multiple competitive rounds.',
      'Elimination takes place after each round based on participant\'s performance.',
      'At the end one outstanding boy and one outstanding girl will be crowned as Mr. & Ms. Connexions.',
      'Participants are evaluated based on Humour, spontaneity and creativity.',
      'Any form of vulgarity will lead to disqualification.',
      'The judge\'s decision will be final..'
    ],
    coordinators: [
      { name: 'Deekshitha', phone: '6369735448' },
      { name: 'Pradeep', phone: '9444073752' }
    ]
  },
  {
    id: 'livery',
    number: '07',
    title: 'Livery',
    subtitle: 'Digital Poster Making',
    formatType: 'Online submission event',
    venue: 'Online',
    timing: 'Online Submission',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScBmwRvgDEBXVqNFtFOP_T2VJniuqCi2gYxvpJ6x3xlM1KQHw/viewform?usp=header',
    tagline: 'Your canvas. Your concept. Your grid. Turn a blank screen into something that demands attention. Play with ideas, push your creativity, and design a poster that\'s impossible to scroll past. No limits. Just your vision racing to the finish line.',
    theme: 'A poster on any F1 Driver of your choice',
    rules: [
      'It is an online submission event.',
      'Participants have to design a digital poster on the given theme: "A poster on any F1 Driver of your choice" and submit it within the deadline.',
      'Participants can use any editing software like Canva, Photoshop, etc.',
      'Plagiarism will lead to disqualification.',
      'Posters will be evaluated based on originality and creativity.',
      'Late submission will not be accepted.',
      'The judge\'s decision will be final.'
    ],
    coordinators: [
      { name: 'Keerti', phone: '9080771419' }
    ]
  },
  {
    id: 'gridshots',
    number: '08',
    title: 'Gridshots',
    subtitle: 'Photography',
    formatType: 'Online submission event',
    venue: 'Online',
    timing: 'Online Submission',
    ferrariOrRedBull: 'RedBull',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyTJ2eTZ31ODVdL0sSGMxtnOqtozqruWliBucUgTR0f0EekQ/viewform?usp=dialog',
    tagline: 'Lights out, camera ready! Catch the action, find the perfect racing line, and freeze the moment before it\'s gone. From the starting grid to the chequered flag, your camera is your car — now go for pole position!.',
    theme: 'The Art we miss / Under the radar',
    rules: [
      'It is an online submission event.',
      'Participants have to capture a photo based on the given theme: "The Art we miss / Under the radar" and submit the unedited file in RAW/JPEG file through google drive.',
      'Both mobile and camera can be used.',
      'Plagiarism will lead to disqualification.',
      'Pictures will be evaluated based on originality and creativity.',
      'Late submission will not be considered.',
      'The judge\'s decision will be final.'
    ],
    coordinators: [
      { name: 'Adthiya Kishore', phone: '8431161182' }
    ]
  }
];

// Exact circuit schedule from user
export const CIRCUIT_SCHEDULE: CircuitScheduleEntry[] = [
  {
    type: 'Debate',
    eventName: 'Drivers Duel',
    venue: 'KB Seminar Hall',
    timing: '10:30 AM - 12:30 PM'
  },
  {
    type: 'Quiz Round 1',
    eventName: 'Grid Quiz',
    venue: 'Classroom',
    timing: '11:30 AM - 12:30 PM'
  },
  {
    type: 'Quiz Round 2',
    eventName: 'Grid Quiz',
    venue: 'KB Seminar Hall',
    timing: '1:00 PM - 2:00 PM'
  },
  {
    type: 'Crime Analysis',
    eventName: 'Race Investigation',
    venue: 'Classroom',
    timing: '10:30 AM - 1:30 PM'
  },
  {
    type: 'Shipwreck',
    eventName: 'The Last Lap',
    venue: 'Classroom',
    timing: '10:30 AM - 1:00 PM'
  },
  {
    type: 'Green Screen',
    eventName: 'Paddock TV',
    venue: 'Dwaraka',
    timing: '10:30 AM - 1:00 PM'
  },
  {
    type: 'Title Event',
    eventName: 'Pole Position',
    venue: 'Dwaraka',
    timing: '1:30 PM - 3:30 PM'
  },
  {
    type: 'Digital Poster',
    eventName: 'Livery',
    venue: 'Online',
    timing: 'Online',
    isOnline: true
  },
  {
    type: 'Photography',
    eventName: 'Gridshots',
    venue: 'Online',
    timing: 'Online',
    isOnline: true
  },
  {
    type: 'Valedictory',
    eventName: 'Valedictory Ceremony',
    venue: 'Dwaraka',
    timing: '3:30 PM - 4:30 PM',
    isCeremony: true
  }
];
