const videoJson = [
  {
    id: 1,
    title: "Hyme for the weeknd",
    src: "/video/1.mp4",
    type: "Pop, Electronic, Classic",
    description: "A high-energy hit that defined the 2020s pop era.",
    views: 1345829,
    commentCount: 4321,
    likeCount: 87500,
    thumbnail: "/image/1.png",
    author: "Maroon 5",
    text: "M5",
    date: "2 years ago"
  },
  {
    id: 2,
    title: "Let me love you",
    src: "/video/2.mp4",
    type: "Pop, Ballad, New",
    description: "An emotional ballad from 'A Star is Born'.",
    views: 2456873,
    commentCount: 5821,
    likeCount: 152300,
    thumbnail: "/image/2.png",
    author: "Justin Bieber",
    text: "JB",
    date: "1 year ago"
  },
  {
    id: 3,
    title: "Don't Start Now",
    src: "/video/3.mp4",
    type: "Pop, Disco, Electronic",
    description: "A catchy tune that took over global charts.",
    views: 9382712,
    commentCount: 10245,
    thumbnail: "/image/3.png",
    author: "Dua Lipa",
    text: "DL",
    likeCount: 681200,
    date: "3 years ago"
  },
  {
    id: 4,
    title: "Levitating",
    src: "/video/4.mp4",
    type: "Pop, Funk, Soul",
    description: "A soulful song of heartbreak and reflection.",
    views: 5439281,
    thumbnail: "/image/4.png",
    commentCount: 6541,
    author: "Dua Lipa",
    text: "DL",
    likeCount: 412000,
    date: "1 year ago"
  },
  {
    id: 5,
    title: "New rules",
    src: "/video/5.mp4",
    type: "Pop, Dance, New",
    description: "A dance-pop apology anthem.",
    views: 4281947,
    thumbnail: "/image/5.png",
    commentCount: 3999,
    author: "Dua Lipa",
    text: "DL",
    likeCount: 312000,
    date: "2 years ago"
  },
  {
    id: 6,
    title: "Sorry- Justin Bieber",
    src: "/video/6.mp4",
    type: "Pop, Latin, New",
    description: "A romantic duet with Latin vibes.",
    views: 3912843,
    thumbnail: "/image/6.png",
    commentCount: 3212,
    author: "Justin Bieber",
    text: "JB",
    likeCount: 284300,
    date: "6 months ago"
  },
  {
    id: 7,
    title: "Girls like you - Maroon 5",
    src: "/video/7.mp4",
    type: "Pop, Disco, Rock",
    description: "A disco-pop banger that gets you moving.",
    views: 2749201,
    thumbnail: "/image/7.png",
    commentCount: 2873,
    author: "Maroon 5",
    text: "M5",
    likeCount: 190200,
    date: "3 years ago"
  },
  {
    id: 8,
    title: "Memories - Maroon 5",
    src: "/video/8.mp4",
    type: "Pop, Retro, Classic",
    description: "A groovy song with an 80s vibe.",
    views: 3215984,
    thumbnail: "/image/8.png",
    commentCount: 3145,
    author: "Maroon 5",
    text: "M5",
    likeCount: 244000,
    date: "11 months ago"
  },
  {
    id: 9,
    title: "Sugar - Maroon 5",
    src: "/video/9.mp4",
    type: "Pop, Funk, Dance",
    description: "An empowering anthem of self-belief.",
    views: 4782134,
    thumbnail: "/image/9.png",
    commentCount: 5034,
    author: "Maroon 5",
    text: "M5",
    likeCount: 376100,
    date: "5 years ago"
  },
  {
    id: 10,
    title: "The nights",
    src: "/video/10.mp4",
    type: "Pop, EDM, Rock",
    description: "An energetic track with emotional lyrics.",
    views: 3847261,
    thumbnail: "/image/10.png",
    commentCount: 4382,
    author: "One direction",
    text: "OD",
    likeCount: 298700,
    date: "1 year ago"
  },
  {
    id: 11,
    title: "Espresso",
    src: "/video/11.mp4",
    type: "Pop, Indie, New",
    description: "A minimalist, edgy pop song.",
    views: 5162489,
    thumbnail: "/image/11.png",
    commentCount: 6239,
    author: "Sabrina Carpenter",
    text: "SC",
    likeCount: 402000,
    date: "3 months ago"
  },
  {
    id: 12,
    title: "No lie ",
    src: "/video/12.mp4",
    type: "Reggae, Dancehall, Pop",
    description: "A funky throwback hit with timeless energy.",
    views: 7382945,
    commentCount: 7384,
    thumbnail: "/image/12.png",
    author: "Sean paul",
    text: "SP",
    likeCount: 580000,
    date: "4 years ago"
  },
  {
    id: 13,
    title: "Nothing holds me back",
    src: "/video/13.mp4",
    type: "Rock, Ballad, Pop, Metal",
    description: "A passionate ballad from 'Fifty Shades of Grey'.",
    views: 3847521,
    commentCount: 4211,
    author: "Shaun mendes",
    text: "SM",
    thumbnail: "/image/13.png",
    likeCount: 310500,
    date: "2 years ago"
  },
  {
    id: 14,
    title: "Sanorita",
    src: "/video/14.mp4",
    type: "Latin, Pop, New",
    author: "Shaun mendes",
    description: "A satirical take on celebrity love stories.",
    thumbnail: "/image/14.png",
    views: 6249183,
    text: "SM",
    commentCount: 6987,
    likeCount: 490800,
    date: "9 months ago"
  },
  {
    id: 15,
    title: "Cheap thrills",
    src: "/video/15.mp4",
    type: "Pop, Trap, Electronic, Metal",
    author: "Sia",
    description: "A spellbinding mix of trap and pop.",
    views: 4218592,
    thumbnail: "/image/15.png",
    text: "SA",
    commentCount: 3771,
    likeCount: 330200,
    date: "6 months ago"
  },
  {
    id: 16,
    title: "Blank space",
    src: "/video/16.mp4",
    type: "Pop, Synth, Dark Pop",
    author: "Taylor Swift",
    description: "A bittersweet electronic pop anthem.",
    views: 2984721,
    thumbnail: "/image/16.png",
    text: "Ts",
    commentCount: 2893,
    likeCount: 243900,
    date: "8 years ago"
  },
  {
    id: 17,
    title: "Closer",
    src: "/video/17.mp4",
    type: "Pop, EDM, Trap",
    author: "Chainsmokers",
    description: "A luxurious trap-pop hit.",
    views: 4378291,
    thumbnail: "/image/17.png",
    commentCount: 4082,
    text: "CS",
    likeCount: 362400,
    date: "7 years ago"
  },
  {
    id: 18,
    title: "See You Again - Wiz Khalifa ft. Charlie Puth",
    src: "/video/18.mp4",
    type: "Rap, Pop, Ballad",
    author: "Charlie Puth",
    description: "A tribute track full of emotion.",
    views: 6382819,
    thumbnail: "/image/18.png",
    commentCount: 6723,
    text: "Cp",
    likeCount: 518900,
    date: "9 years ago"
  }
];

export default videoJson;
