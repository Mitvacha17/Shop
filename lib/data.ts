// Site Password
export const SITE_PASSWORD = "iloveyou";

// Customer Data
export interface Customer {
  id: string;
  name: string;
  displayName: string;
}

export interface Letter {
  greeting: string;
  body: string[];
  closing: string;
  signature: string;
}

export interface Song {
  title: string;
  artist: string;
  coverImage: string;
  spotifyUrl: string;
}

export interface Photo {
  id: number;
  src: string;
  caption: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface CustomerData {
  letter: Letter;
  song: Song;
  photos: Photo[];
  quiz: QuizQuestion[];
  successMessage: {
    title: string;
    subtitle: string;
    description: string;
    note: string;
  };
  failureMessage: {
    title: string;
    subtitle: string;
    description: string;
    note: string;
  };
}

export const customers: Customer[] = [
  { id: "Neeb", name: "Neeb", displayName: "Neeb" },
  { id: "phout", name: "phout", displayName: "Phout" },
  { id: "Mom", name: "Mom", displayName: "My Mom" },
];

export const customerData: Record<string, CustomerData> = {
  Neeb: {
    letter: {
      greeting: "My Dearest Neeb,",
      body: [
        "Happy Valentine’s Day, my dear daughter.",
        "You are the sweetest gift in my life, and I am proud of the kind, strong, and loving person you are becoming.",
        "May your heart always be full of love, happiness, and confidence. No matter how big you grow, you will always be my little Valentine. ❤️",
      ],
      closing: "Love you lots",
      signature: "Dad❤️",
    },
    song: {
      title: "Golden hour",
      artist: "JVKE",
      coverImage: "/images/song-cover.jpg",
      spotifyUrl: "https://open.spotify.com/track/4yNk9iz9WVJikRFle3XEvn",
    },
    photos: [
      { id: 1, src: "/Neeb/n1.jpg", caption: "Family" },
      { id: 2, src: "/Neeb/n2.jpg", caption: "Couple" },
      { id: 3, src: "/Neeb/n3.jpg", caption: "Love" },
      { id: 4, src: "/Neeb/n4.jpg", caption: "LOL" },
      { id: 5, src: "/Neeb/n5.jpg", caption: "Siblings" },
      { id: 6, src: "/Neeb/n6.jpg", caption: "Beautiful" },
      { id: 7, src: "/Neeb/n7.jpeg", caption: "HAHAHA" },
      { id: 8, src: "/Neeb/n8.jpeg", caption: "My Mom" },
    ],
    quiz: [
      {
        id: 1,
        question: "When was your youngest brother born?",
        options: ["17/01/2025", "71/10/2005", "17/10/2005", "17/10/2052"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "What year did we move here?",
        options: ["20/11/2006", "20/7/2006", "18/12/2006", "21/11/2006"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Where were you actually born, huh?",
        options: ["I don't know", "Nong Duang", "At home", "In the hospital"],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "What is your mom most afraid of?",
        options: [
          "Worms",
          "Having no money left",
          "Her kids not loving her",
          "All",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Who is your mom favorite Artist?",
        options: [
          "Qab Lis",
          "Michae Jackson",
          "Charlie Puth",
          "Michael Jackson",
        ],
        correctAnswer: 3,
      },
      {
        id: 6,
        question: "What is your daddy birthday?",
        options: ["16/06/1969", "16/06/1966", "6/06/1966", "16/07/1966"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What does your dad like the most?",
        options: ["Banana", "Apple", "Orange", "Bread"],
        correctAnswer: 3,
      },
      {
        id: 8,
        question: "who is your mom's favorite person?",
        options: ["Dad", "Nkauj Neeb", "ນ້ອງກັນ", "A&B"],
        correctAnswer: 3,
      },
      {
        id: 9,
        question: "Do you love your Parents?",
        options: ["Very much", "No", "I don't know", "All"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What should you do after you get a present from your daddy?",
        options: ["Kiss", "Hug", "Ask your dad for money", "All"],
        correctAnswer: 3,
      },
    ],
    successMessage: {
      title: "Good Job!",
      subtitle: "You did it well, Neeb!",
      description:
        "You really do know and love your family so well, Neeb. It shows in the way you care, the way you listen, and the way you always make the people around you feel important and loved. This truly reflects how special our connection is, and it reminds me how lucky we are to share such a strong and meaningful bond together.",
      note: "father’s love for his daughter is deeper than words can ever express.",
    },
    failureMessage: {
      title: "Taiy Lah",
      subtitle: "Br sai jai family lery jao ni",
      description: "Trp br thuek 10 khr ao money ma hai Mitvacha duan2",
      note: "Trp phit br pen y huk sa mer juff2",
    },
  },
  phout: {
    letter: {
      greeting: "My Precious Baby,",
      body: [
        "You came into my life like a shooting star, unexpected but absolutely magical. Every day with you is a gift I cherish deeply.",
        "Your presence makes everything better. The way your eyes sparkle when you're happy, the warmth of your embrace, the sound of your voice - these are the things I live for.",
        "Thank you for loving me, for accepting me, and for being my safe place in this chaotic world.",
        "I promise to love you today, tomorrow, and for all the days that follow.",
      ],
      closing: "Yours completely,",
      signature: "Your forever love",
    },
    song: {
      title: "จี่หอย",
      artist: "P Saderd",
      coverImage: "/images/song-cover.jpg",
      spotifyUrl:
        "https://open.spotify.com/track/53e5c8UIvZ44Xu2EiFrJK9?si=WB3kNSiARga_44Ay42zpbQ&nd=1&dlsi=cf4e334ea28d44c3",
    },
    photos: [
      { id: 1, src: "/p1.jpeg", caption: "Sweet memories" },
      { id: 2, src: "/p2.jpeg", caption: "Together" },
      { id: 3, src: "/p3.jpeg", caption: "Happy days" },
      { id: 4, src: "/p4.jpeg", caption: "Us" },
      { id: 5, src: "/p5.jpeg", caption: "Love" },
      { id: 6, src: "/p6.jpeg", caption: "Joy" },
      { id: 7, src: "/p7.jpeg", caption: "Bliss" },
      { id: 8, src: "/p8.jpeg", caption: "Always" },
    ],
    quiz: [
      {
        id: 1,
        question: "ວັນເກີດນຸ້ນຄືວັນຫຍັງ?",
        options: ["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "ວັນເກີດປູນາຄືວັນຫຍັງ?",
        options: ["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "ເຮົາເລີ່ມຮູ້ຫລີ້ນນຳກັນມາໄດ້ຈັກປີລະ?",
        options: ["4 ປີ", "5 ປີ", "6 ປີ", "7 ປີ"],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "ນຸ້ນມັກສີຫຍັງ?",
        options: ["ສີແດງ", "ສີບົວ", "ສີທອງ", "ສີຟ້າ"],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "ປູນາມີແຟນມາແລ້ວຈັກຄົນ?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "ປູນາກັບນຸ້ນເປັນຄົນແບບໃດ?(ເລືອກເອົາຄຳຕອບທີ່ມີທັ້ງ2ຄົນ)",
        options: ["ຮ້າຍເກັ່ງ", "ຈິງໃຈ", "ເວົ້າມ່ວນ", "ຂີ້ຮ້າຍ"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "ຊື່ກຸ່ມ messager ເຮົາຊື່ວ່າ?",
        options: ["3ໜໍ່", "3P", "JPN", "ໂສດ2ມີແຟນ1"],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "ປູນາມັກກິນຫຍັງຕອນກິນດາດ?",
        options: ["ສາມຊັ້ນ", "ນົມໝູ", "ເຫັດ", "ຜັກ"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "ນຸ້ນມັກກິນຕຳບໍ່?",
        options: [
          "ມັກແຕ່ບໍ່ກິນ",
          "ບໍ່ມັກແຕ່ກິນໄດ້",
          "ບໍ່ມັກບໍ່ມັກກິນເລີຍແພ້",
          "ມັມັກກິນ",
        ],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "ວັນເກີດນຸ້ນມື້ໃດ?",
        options: ["13/6/2003", "16/3/2004", "13/6/2004", "16/6/2006"],
        correctAnswer: 2,
      },
    ],
    successMessage: {
      title: "ເກັ່ງມາກ!",
      subtitle: "ຄະແນນເຕັມເລີຍ!",
      description:
        "Happy birthday ຍ້ອນຫຼັງເດີສາວປີນີ້ກູອາດຈະມາຊ້າແຕ່ມານະອັນນີ້ກູຕັ້ງໃຫ້ເຮັດໃຫ້ມຶງເລີຍລະຮອບແລກເລີຍມັ້ງທີ່ໃຫ້ແບບນີ້ດູມີອະໄຣທຳໄມດີ ເຖິງກູສິບໍ່ຄ່ອຍປາກບໍ່ຄ່ອຍໄປໃສ ບໍ່ອ່ານກຸ່ມ ບໍ່ຄ່ອຍມີເວລາໃຫ້ສູແຕ່ກູກະຍັງຈິງໃຈນຳສູຄືເດົ່າເດີ້ມີບັນຫາກູກະຮັບຟັງຄືເກົ່າ ກູຮູ້ວ່າສູກະນ໊ອຍກູແຍ່ແຫລະທີ່ດຽວນີ້ກູມີແຟນລະບໍ່ໄປໃສນຳສູເລີຍໝັ້ນໄສ້ກູລະສິແຕ່ຊ່ວຍໄມ່ໄດ້ເດະແນວກູຮັກແຟນ5555(ຂິງແປບ)",
      note: "ອ່ານຮອດນີ້ບໍ່ມີຫຍັງຫລາຍຕັ້ງໃຈໃຊ້ຊີວິດເດີ້ລູກມີຫຍັງກະມາປຶກສາໄດ້ຕະຫລອດສິຮັບຟັງເອງເຖິງສິປາກຫມາແຕ່ກະຈິງໃຈເດີ້ ຂໍໃຫ້ມີຄວາມສຸກນ້າາ👀",
    },
    failureMessage: {
      title: "ໂອ້ຍຍຍ!",
      subtitle: "ມຶງບໍ່ໃສ່ໃຈພວກກູແມ້🫶🏻😔",
      description:
        "ບໍ່ຕ້ອງເສຍໃຈເດີ້, Phout. ນີ້ບໍ່ໄດ້ເຮັດໃຫ້ຄວາມຮັກທີ່ຂ້ອຍມີຕໍ່ເຈົ້າຫລຸດລົງເລີຍ. ບາງທີເຮົາອາດຈະຕ້ອງໃຊ້ເວລາຮ່ວມກັນຫລາຍຂຶ້ນ!",
      note: "ຄວາມຮັກບໍ່ແມ່ນເລື່ອງຂອງຄະແນນ, ແຕ່ແມ່ນເລື່ອງຂອງຊ່ວງເວລາທີ່ດີ",
    },
  },
  Mom: {
    letter: {
      greeting: "ເຖິງເມຍສຸດທີ່ຮັກ🫶🏻",
      body: [
        "ສຸກສັນວັນວາເລນໄທນ໌ ຮັກຂອງຂ້ອຍ.",
        "ຂອບໃຈທີ່ຢູ່ຂ້າງກັນ ແລະເຮັດໃຫ້ທຸກມື້ເຕັມໄປດ້ວຍຄວາມອົບອຸ່ນ ແລະຄວາມໝາຍ. ຮອຍຍິ້ມຂອງເຈົ້າແມ່ນຄວາມສຸກຂອງຂ້ອຍ ແລະຄວາມຮັກຂອງເຈົ້າແມ່ນກຳລັງໃຈໃຫ້ຂ້ອຍໃນທຸກມື້.",
        "ຂໍໃຫ້ເຮົາຈັບມືກັນແບບນີ້ໄປອີກດົນໆ ແລະຮັກກັນເພີ່ມຂຶ້ນໃນທຸກວັນ.",
      ],
      closing: "ຮັກເຈົ້າສະເໝີ,",
      signature: "ຜົວ",
    },
    song: {
      title: "Koj Yog Kuv Lub Neej",
      artist: "Xy Lee",
      coverImage: "/images/song-cover.jpg",
      spotifyUrl: "https://open.spotify.com/track/40vBdeM3fw2uzgWUlGVP49",
    },
    photos: [
      { id: 1, src: "/Mom/m1.jpg", caption: "Love" },
      { id: 2, src: "/Mom/m2.jpg", caption: "Together" },
      { id: 3, src: "/Mom/m3.jpg", caption: "So Beautiful" },
      { id: 4, src: "/Mom/m4.jpeg", caption: "Cutie" },
      { id: 5, src: "/Mom/m5.jpeg", caption: "My Queen" },
      { id: 6, src: "/Mom/m6.jpg", caption: "Baby" },
      { id: 7, src: "/Mom/m7.jpg", caption: "Love your smile" },
      { id: 8, src: "/Mom/m8.png", caption: "LOL" },
    ],
    quiz: [
      {
        id: 1,
        question: "ເຈົ້າຮັກຂ້ອຍບໍ?",
        options: ["ຮັກ", "ບໍ່ຮັກ"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "ລູກສາວເຈົ້າຊື່ຫຍັງ?",
        options: [
          "ນາງ ໄມເນັ້ງ",
          "ນາງ ເມສະຫວັນ",
          "ນາງ ເນັ້ງ",
          "ນາງ ເມກສະຫວັນ",
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "ວັນຄົບຮອບແຕ່ງງານ?",
        options: ["14/02/202", "14/02/2025", "14/02/2026", "14/02/2027"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "ໄປຕະຫຼາດພໍ່ມັກຊື້ຫຍັງຫຼາຍທີ່ສຸດ?",
        options: ["ກ້ວຍ", "ປາ", "ຊີ້ນ", "ຜັກ"],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "ວັນເດືອນປີເກີດລູກຊາຍກົກເຈົ້າວັນທີ່ເທົ່າໃດ?",
        options: [
          "14/10/2000",
          "17/10/2000",
          "29/10/2000",
          "19/10/2000",
        ],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "ວັນເກີດຜົວເຈົ້າແມ່ນວັນທີ່ເດືອນປີໃດ?",
        options: ["16/06/1966", "1/06/1966", "29/06/1966", "19/06/1966"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "ເຮົາແຕ່ງງານກັນມາໄດ້ຈັກປີແລ້ວ?",
        options: ["1ປີ", "2ປີ", "3ປີ", "4ປີ"],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "ເຮົາມີລູກກັນຈັກຄົນ?",
        options: ["1ຄົນ", "2ຄົນ", "3ຄົນ", "4ຄົນ"],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "ດີໃຈກັບຂອງຂວັນປີນີ້ບໍ່?",
        options: [
          "ດີໃຈ",
          "ບໍ່ດີໃຈ",
          "ມັກ",
          "ບໍ່ມັກ",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "ຮັກພໍ່ບໍ່?",
        options: ["ຮັກ", "ບໍ່ຮັກ", "ຮັກຫຼາຍ", "ຮັກຫລາຍທີ່ສຸດ"],
        correctAnswer: 3,
      },
    ],
    successMessage: {
      title: "Hlub Koj Os",
      subtitle: "Love You",
      description:
        "I never doubted you for a second. You know my heart better than anyone else in this world.",
      note: "You are the best thing that ever happened to me",
    },
    failureMessage: {
      title: "It's Okay, Sweetheart!",
      subtitle: "Love is the only score that matters",
      description:
        "Even if you didn't get them all right, you're still the only one for me. Let's make more memories together!",
      note: "I love you forever and always",
    },
  },
};

export function getCustomerData(customerId: string): CustomerData | null {
  return customerData[customerId] || null;
}

export function getCustomer(customerId: string): Customer | null {
  return customers.find((c) => c.id === customerId) || null;
}
