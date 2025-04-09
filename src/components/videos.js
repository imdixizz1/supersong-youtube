const videoJson = [
  {
    id: 1,
    title: "Blinding Lights - The Weeknd",
    src: "/video/1.mp4",
    description: "A high-energy hit that defined the 2020s pop era.",
    views: 1345829,
    commentCount: 4321,
    likeCount: 87500,
    thumbnail:"https://avatars.mds.yandex.net/i?id=d213edf99e7b263dbdc60d3333326103986e1820-8497272-images-thumbs&n=13"
  },
  {
    id: 2,
    title: "Shallow - Lady Gaga & Bradley Cooper",
    src: "/video/2.mp4",
    description: "An emotional ballad from 'A Star is Born'.",
    views: 2456873,
    commentCount: 5821,
    likeCount: 152300,
    thumbnail:"https://avatars.mds.yandex.net/i?id=ab3d210ac5abff6fd052bb68c03a4674c37dea06-5288772-images-thumbs&n=13"

  },
  {
    id: 3,
    title: "Shape of You - Ed Sheeran",
    src: "/video/3.mp4",
    description: "A catchy tune that took over global charts.",
    views: 9382712,
    commentCount: 10245,
    thumbnail:"https://avatars.mds.yandex.net/i?id=57892a79967cfbfbeda1f995be20e694bc292322-10092505-images-thumbs&n=13",

    likeCount: 681200
  },
  {
    id: 4,
    title: "Someone Like You - Adele",
    src: "/video/4.mp4",
    description: "A soulful song of heartbreak and reflection.",
    views: 5439281,
    thumbnail:"https://avatars.mds.yandex.net/i?id=c5307f064928964685c8d35812aebde781711336-8224882-images-thumbs&n=13",
    commentCount: 6541,
    likeCount: 412000
  },
  {
    id: 5,
    title: "Sorry - Justin Bieber",
    src: "/video/5.mp4",
    description: "A dance-pop apology anthem.",
    views: 4281947,
    thumbnail:"https://avatars.mds.yandex.net/i?id=4b4fa08b4989bdc4e47b85f5d5be0651c2325f94-4902600-images-thumbs&n=13",
    commentCount: 3999,
    likeCount: 312000
  },
  {
    id: 6,
    title: "Señorita - Shawn Mendes & Camila Cabello",
    src: "/video/6.mp4",
    description: "A romantic duet with Latin vibes.",
    views: 3912843,
    thumbnail:"https://avatars.mds.yandex.net/i?id=2ed6e9402122a9f636e4cedaa6406dba18f5cf73-7975524-images-thumbs&n=13",
    commentCount: 3212,
    likeCount: 284300
  },
  {
    id: 7,
    title: "Levitating - Dua Lipa",
    src: "/video/7.mp4",
    description: "A disco-pop banger that gets you moving.",
    views: 2749201,
    thumbnail:"https://avatars.mds.yandex.net/i?id=7d44398e255660f37acc757490bf9df015f83bfd-3739799-images-thumbs&n=13",
    commentCount: 2873,
    likeCount: 190200
  },
  {
    id: 8,
    title: "Can’t Feel My Face - The Weeknd",
    src: "/video/8.mp4",
    description: "A groovy song with an 80s vibe.",
    views: 3215984,
    thumbnail:"https://avatars.mds.yandex.net/i?id=861b4152aed4be04ea731838bb83e569709a8a1767124d22-9831149-images-thumbs&n=13",
    commentCount: 3145,
    likeCount: 244000
  },
  {
    id: 9,
    title: "Roar - Katy Perry",
    src: "/video/9.mp4",
    description: "An empowering anthem of self-belief.",
    views: 4782134,
    thumbnail:"https://avatars.mds.yandex.net/i?id=8d2b3c500b7f4b1ef12597a961a69055f0a51bce-12413135-images-thumbs&n=13",
    commentCount: 5034,
    likeCount: 376100
  },
  {
    id: 10,
    title: "Stay - The Kid LAROI & Justin Bieber",
    src: "/video/10.mp4",
    description: "An energetic track with emotional lyrics.",
    views: 3847261,
    thumbnail:"https://avatars.mds.yandex.net/i?id=0e818d0411d0242318d89a29294b0dcfd1590444-9161202-images-thumbs&n=13",
    commentCount: 4382,
    likeCount: 298700
  },
  {
    id: 11,
    title: "Bad Guy - Billie Eilish",
    src: "/video/11.mp4",
    description: "A minimalist, edgy pop song.",
    views: 5162489,
    thumbnail:"https://avatars.mds.yandex.net/i?id=5c5f13e1c6ab2170fba7cec9bf000c9dc035c4d6-7215189-images-thumbs&n=13",
    commentCount: 6239,
    likeCount: 402000
  },
  {
    id: 12,
    title: "Uptown Funk - Bruno Mars",
    src: "/video/12.mp4",
    description: "A funky throwback hit with timeless energy.",
    views: 7382945,
    commentCount: 7384,
    thumbnail:"https://avatars.mds.yandex.net/i?id=2ec419cf59b7b827aedffa8e8fcba739-4835645-images-thumbs&n=13",
    likeCount: 580000
  },
  {
    id: 13,
    title: "Love Me Like You Do - Ellie Goulding",
    src: "/video/13.mp4",
    description: "A passionate ballad from 'Fifty Shades of Grey'.",
    views: 3847521,
    commentCount: 4211,
    thumbnail:"https://avatars.mds.yandex.net/i?id=227fc329fec12c9b15b95291567df772b6c8ab6a-12629451-images-thumbs&n=13",
    likeCount: 310500
  },
  {
    id: 14,
    title: "Blank Space - Taylor Swift",
    src: "/video/14.mp4",
    description: "A satirical take on celebrity love stories.",
    thumbnail:"https://avatars.mds.yandex.net/i?id=6e7fd9ea681ae1f9193edc1c8020e74ed9127735-9666026-images-thumbs&n=13",
    views: 6249183,
    commentCount: 6987,
    likeCount: 490800
  },
  {
    id: 15,
    title: "Dark Horse - Katy Perry ft. Juicy J",
    src: "/video/15.mp4",
    description: "A spellbinding mix of trap and pop.",
    views: 4218592,
    thumbnail:"https://avatars.mds.yandex.net/i?id=e8c55e5ed599db649fbb50acc777c9165883eca9-4119220-images-thumbs&n=13",
    commentCount: 3771,
    likeCount: 330200
  },
  {
    id: 16,
    title: "Happier - Marshmello ft. Bastille",
    src: "/video/16.mp4",
    description: "A bittersweet electronic pop anthem.",
    views: 2984721,
    thumbnail:"https://avatars.mds.yandex.net/i?id=5f8ab1c6e0256b063da53411547aac1b6aa955d2-7755772-images-thumbs&n=13",
    commentCount: 2893,
    likeCount: 243900
  },
  {
    id: 17,
    title: "7 Rings - Ariana Grande",
    src: "/video/17.mp4",
    description: "A luxurious trap-pop hit.",
    views: 4378291,
    thumbnail:"https://avatars.mds.yandex.net/i?id=d99b88195ba1b8216c75fef700a83d94d2905711-5234137-images-thumbs&n=13",
    commentCount: 4082,
    likeCount: 362400
  },
  {
    id: 18,
    title: "See You Again - Wiz Khalifa ft. Charlie Puth",
    src: "/video/18.mp4",
    description: "A tribute track full of emotion.",
    views: 6382819,
    thumbnail:"https://avatars.mds.yandex.net/i?id=df649dfef25a45d3d21a1976732a786401017590-4571959-images-thumbs&n=13",
    commentCount: 6723,
    likeCount: 518900
  },
  {
    id: 19,
    title: "Peaches - Justin Bieber ft. Daniel Caesar, Giveon",
    src: "/video/19.mp4",
    description: "A smooth, vibey hit of the summer.",
    views: 3958712,
    thumbnail:"https://avatars.mds.yandex.net/i?id=7fa1cbbfddee477dc318f3c5d4dc218ed9bd2dfb-6712958-images-thumbs&n=13",
    commentCount: 3410,
    likeCount: 299100
  }
];

export default videoJson;
