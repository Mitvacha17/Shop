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
  { id: "jaja", name: "jaja", displayName: "Jaja" },
  { id: "phout", name: "phout", displayName: "Phout" },
  { id: "love", name: "love", displayName: "My Love" },
];

export const customerData: Record<string, CustomerData> = {
  jaja: {
    letter: {
      greeting: "My Dearest Jaja,",
      body: [
        "Every moment with you feels like a beautiful dream I never want to wake up from. Your smile lights up my world in ways words could never fully capture.",
        "From the first day we met, I knew there was something magical about you. The way you laugh, the way you care, the way you make even ordinary moments feel extraordinary.",
        "You are my favorite person, my best friend, and the love of my life. Thank you for being you, and for choosing to share your journey with me.",
        "Here's to us, to our love story, and to all the adventures that await us together."
      ],
      closing: "Forever and always yours,",
      signature: "With all my love"
    },
    song: {
      title: "Perfect",
      artist: "Ed Sheeran",
      coverImage: "/images/song-cover.jpg",
      spotifyUrl: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
    },
    photos: [
      { id: 1, src: "/jooo.jpg", caption: "Our first date" },
      { id: 2, src: "/jooo.jpg", caption: "Beach sunset" },
      { id: 3, src: "/jooo.jpg", caption: "Coffee mornings" },
      { id: 4, src: "/jooo.jpg", caption: "Adventure time" },
      { id: 5, src: "/jooo.jpg", caption: "Stargazing" },
      { id: 6, src: "/jooo.jpg", caption: "Cooking together" },
      { id: 7, src: "/jooo.jpg", caption: "Movie nights" },
      { id: 8, src: "/jooo.jpg", caption: "Forever us" }
    ],
    quiz: [
      {
        id: 1,
        question: "What was the first movie we watched together?",
        options: ["The Notebook", "Titanic", "La La Land", "A Star Is Born"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is my favorite flower?",
        options: ["Tulips", "Roses", "Sunflowers", "Lilies"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Where did we have our first kiss?",
        options: ["At the park", "At the beach", "Under the stars", "In the rain"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "What is my favorite way to spend time with you?",
        options: ["Watching movies", "Cooking together", "Going for walks", "All of the above"],
        correctAnswer: 3
      },
      {
        id: 5,
        question: "What song reminds me of you?",
        options: ["Perfect", "Thinking Out Loud", "All of Me", "A Thousand Years"],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "What is my favorite thing about you?",
        options: ["Your smile", "Your laugh", "Your kindness", "Everything"],
        correctAnswer: 3
      },
      {
        id: 7,
        question: "What is our anniversary month?",
        options: ["January", "February", "March", "April"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "What do I call you most often?",
        options: ["Honey", "Baby", "Love", "Sweetheart"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "What is my dream vacation with you?",
        options: ["Paris", "Maldives", "Japan", "Italy"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "How much do I love you?",
        options: ["A lot", "So much", "More than words can say", "To infinity and beyond"],
        correctAnswer: 3
      }
    ],
    successMessage: {
      title: "You Did It!",
      subtitle: "Perfect Score!",
      description: "You really do know me so well, Jaja. This proves just how special our connection is.",
      note: "I love you more than words can say"
    },
    failureMessage: {
      title: "Oh No!",
      subtitle: "All attempts used",
      description: "Don't worry, Jaja. This doesn't change how much I love you. Maybe we need to spend more time together making new memories!",
      note: "Love isn't about perfect scores, it's about perfect moments"
    }
  },
  phout: {
    letter: {
      greeting: "My Precious Baby,",
      body: [
        "You came into my life like a shooting star, unexpected but absolutely magical. Every day with you is a gift I cherish deeply.",
        "Your presence makes everything better. The way your eyes sparkle when you're happy, the warmth of your embrace, the sound of your voice - these are the things I live for.",
        "Thank you for loving me, for accepting me, and for being my safe place in this chaotic world.",
        "I promise to love you today, tomorrow, and for all the days that follow."
      ],
      closing: "Yours completely,",
      signature: "Your forever love"
    },
    song: {
      title: "จี่หอย",
      artist: "P Saderd",
      coverImage: "/images/song-cover.jpg",
      spotifyUrl: "https://open.spotify.com/track/53e5c8UIvZ44Xu2EiFrJK9?si=WB3kNSiARga_44Ay42zpbQ&nd=1&dlsi=cf4e334ea28d44c3"
    },
    photos: [
      { id: 1, src: "/p1.jpeg", caption: "Sweet memories" },
      { id: 2, src: "/p2.jpeg", caption: "Together" },
      { id: 3, src: "/p3.jpeg", caption: "Happy days" },
      { id: 4, src: "/p4.jpeg", caption: "Us" },
      { id: 5, src: "/p5.jpeg", caption: "Love" },
      { id: 6, src: "/p6.jpeg", caption: "Joy" },
      { id: 7, src: "/p7.jpeg", caption: "Bliss" },
      { id: 8, src: "/p8.jpeg", caption: "Always" }
    ],
    quiz: [
      {
        id: 1,
        question: "ວັນເກີດນຸ້ນຄືວັນຫຍັງ?",
        options: ["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "ວັນເກີດປູນາຄືວັນຫຍັງ?",
        options: ["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "ເຮົາເລີ່ມຮູ້ຫລີ້ນນຳກັນມາໄດ້ຈັກປີລະ?",
        options: ["4 ປີ", "5 ປີ", "6 ປີ", "7 ປີ"],
        correctAnswer: 3
      },
      {
        id: 4,
        question: "ນຸ້ນມັກສີຫຍັງ?",
        options: ["ສີແດງ", "ສີບົວ", "ສີທອງ", "ສີຟ້າ"],
        correctAnswer: 3
      },
      {
        id: 5,
        question: "ປູນາມີແຟນມາແລ້ວຈັກຄົນ?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "ປູນາກັບນຸ້ນເປັນຄົນແບບໃດ?(ເລືອກເອົາຄຳຕອບທີ່ມີທັ້ງ2ຄົນ)",
        options: ["ຮ້າຍເກັ່ງ", "ຈິງໃຈ", "ເວົ້າມ່ວນ", "ຂີ້ຮ້າຍ"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "ຊື່ກຸ່ມ messager ເຮົາຊື່ວ່າ?",
        options: ["3ໜໍ່", "3P", "JPN", "ໂສດ2ມີແຟນ1"],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "ປູນາມັກກິນຫຍັງຕອນກິນດາດ?",
        options: ["ສາມຊັ້ນ", "ນົມໝູ", "ເຫັດ", "ຜັກ"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "ນຸ້ນມັກກິນຕຳບໍ່?",
        options: ["ມັກແຕ່ບໍ່ກິນ", "ບໍ່ມັກແຕ່ກິນໄດ້", "ບໍ່ມັກບໍ່ມັກກິນເລີຍແພ້", "ມັມັກກິນ"],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "ວັນເກີດນຸ້ນມື້ໃດ?",
        options: ["13/6/2003", "16/3/2004", "13/6/2004", "16/6/2006"],
        correctAnswer: 2
      }
    ],
    successMessage: {
      title: "ເກັ່ງມາກ!",
      subtitle: "ຄະແນນເຕັມເລີຍ!",
      description: "Happy birthday ຍ້ອນຫຼັງເດີສາວປີນີ້ກູອາດຈະມາຊ້າແຕ່ມານະອັນນີ້ກູຕັ້ງໃຫ້ເຮັດໃຫ້ມຶງເລີຍລະຮອບແລກເລີຍມັ້ງທີ່ໃຫ້ແບບນີ້ດູມີອະໄຣທຳໄມດີ ເຖິງກູສິບໍ່ຄ່ອຍປາກບໍ່ຄ່ອຍໄປໃສ ບໍ່ອ່ານກຸ່ມ ບໍ່ຄ່ອຍມີເວລາໃຫ້ສູແຕ່ກູກະຍັງຈິງໃຈນຳສູຄືເດົ່າເດີ້ມີບັນຫາກູກະຮັບຟັງຄືເກົ່າ ກູຮູ້ວ່າສູກະນ໊ອຍກູແຍ່ແຫລະທີ່ດຽວນີ້ກູມີແຟນລະບໍ່ໄປໃສນຳສູເລີຍໝັ້ນໄສ້ກູລະສິແຕ່ຊ່ວຍໄມ່ໄດ້ເດະແນວກູຮັກແຟນ5555(ຂິງແປບ)",
      note: "ອ່ານຮອດນີ້ບໍ່ມີຫຍັງຫລາຍຕັ້ງໃຈໃຊ້ຊີວິດເດີ້ລູກມີຫຍັງກະມາປຶກສາໄດ້ຕະຫລອດສິຮັບຟັງເອງເຖິງສິປາກຫມາແຕ່ກະຈິງໃຈເດີ້ ຂໍໃຫ້ມີຄວາມສຸກນ້າາ👀"
    },
    failureMessage: {
      title: "ໂອ້ຍຍຍ!",
      subtitle: "ມຶງບໍ່ໃສ່ໃຈພວກກູແມ້🫶🏻😔",
      description: "ບໍ່ຕ້ອງເສຍໃຈເດີ້, Phout. ນີ້ບໍ່ໄດ້ເຮັດໃຫ້ຄວາມຮັກທີ່ຂ້ອຍມີຕໍ່ເຈົ້າຫລຸດລົງເລີຍ. ບາງທີເຮົາອາດຈະຕ້ອງໃຊ້ເວລາຮ່ວມກັນຫລາຍຂຶ້ນ!",
      note: "ຄວາມຮັກບໍ່ແມ່ນເລື່ອງຂອງຄະແນນ, ແຕ່ແມ່ນເລື່ອງຂອງຊ່ວງເວລາທີ່ດີ"
    }
  },
  love: {
    letter: {
      greeting: "To My One True Love,",
      body: [
        "In a world full of billions of people, I found you. And that, my love, is the greatest miracle of my life.",
        "You understand me in ways no one else ever has. You see past my flaws and love me anyway. You make me want to be a better person every single day.",
        "Our love story is my favorite story. It's written in the stars, destined by fate, and sealed with countless precious moments we've shared.",
        "I cannot wait to create more memories with you, to grow old with you, and to love you for eternity."
      ],
      closing: "Until the end of time,",
      signature: "Your soulmate"
    },
    song: {
      title: "A Thousand Years",
      artist: "Christina Perri",
      coverImage: "/images/song-cover.jpg",
      spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl"
    },
    photos: [
      { id: 1, src: "/jooo.jpg", caption: "Destiny" },
      { id: 2, src: "/jooo.jpg", caption: "Soulmates" },
      { id: 3, src: "/jooo.jpg", caption: "Eternal" },
      { id: 4, src: "/jooo.jpg", caption: "Infinite" },
      { id: 5, src: "/jooo.jpg", caption: "Timeless" },
      { id: 6, src: "/jooo.jpg", caption: "Precious" },
      { id: 7, src: "/jooo.jpg", caption: "Magical" },
      { id: 8, src: "/jooo.jpg", caption: "Forever" }
    ],
    quiz: [
      {
        id: 1,
        question: "What did I think when I first saw you?",
        options: ["Wow", "Beautiful", "The one", "All of these"],
        correctAnswer: 3
      },
      {
        id: 2,
        question: "What is our song?",
        options: ["A Thousand Years", "Perfect", "All of Me", "Thinking Out Loud"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What do I want most in life?",
        options: ["Success", "Happiness", "You", "Peace"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "How long will I love you?",
        options: ["Forever", "Always", "Eternally", "All answers are correct"],
        correctAnswer: 3
      },
      {
        id: 5,
        question: "What makes you special to me?",
        options: ["Your heart", "Your soul", "Your being", "Everything about you"],
        correctAnswer: 3
      },
      {
        id: 6,
        question: "What is my favorite way to say I love you?",
        options: ["Words", "Actions", "Presence", "All of these"],
        correctAnswer: 3
      },
      {
        id: 7,
        question: "Where do I see us in 10 years?",
        options: ["Happy", "Together", "In love", "All of the above"],
        correctAnswer: 3
      },
      {
        id: 8,
        question: "What is the key to our love?",
        options: ["Trust", "Communication", "Respect", "All combined"],
        correctAnswer: 3
      },
      {
        id: 9,
        question: "What do you mean to me?",
        options: ["The world", "Everything", "My universe", "All descriptions fit"],
        correctAnswer: 3
      },
      {
        id: 10,
        question: "Are you my forever Valentine?",
        options: ["Yes!", "Definitely!", "Absolutely!", "Yes, yes, and yes!"],
        correctAnswer: 3
      }
    ],
    successMessage: {
      title: "Amazing, My Love!",
      subtitle: "A Perfect 10!",
      description: "I never doubted you for a second. You know my heart better than anyone else in this world.",
      note: "You are the best thing that ever happened to me"
    },
    failureMessage: {
      title: "It's Okay, Sweetheart!",
      subtitle: "Love is the only score that matters",
      description: "Even if you didn't get them all right, you're still the only one for me. Let's make more memories together!",
      note: "I love you forever and always"
    }
  }
};

export function getCustomerData(customerId: string): CustomerData | null {
  return customerData[customerId] || null;
}

export function getCustomer(customerId: string): Customer | null {
  return customers.find(c => c.id === customerId) || null;
}
