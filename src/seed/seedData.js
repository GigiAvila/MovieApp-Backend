const seed = [
  {
    name: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: '1994',
    actor: 'John Travolta',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910308/Pulp_Fiction_tzau0z.jpg',
    resume:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: 'Crime',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166191/MovieApp/3_-_Pulp_Fiction_utpmyr.jpg',
    keywords: ['mafia', 'crime', 'violence']
  },
  {
    name: 'Inception',
    director: 'Christopher Nolan',
    year: '2010',
    actor: 'Leonardo DiCaprio',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910311/Inception_cr2rbc.jpg',
    resume:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: 'Sci-Fi',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166191/MovieApp/4_-_Inception_kiarom.jpg',
    keywords: ['dreams', 'technology', 'mind heist']
  },
  {
    name: 'Goodfellas',
    director: 'Martin Scorsese',
    year: '1990',
    actor: 'Robert De Niro',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910310/Goodfellas_h8udui.jpg',
    resume:
      'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    genre: 'Crime',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166192/MovieApp/2_-_Goodfellas_vzquj8.jpg',
    keywords: ['mob', 'organized crime', 'Italian-American']
  },
  {
    name: 'The Lion King',
    director: 'Roger Allers',
    year: '1994',
    actor: 'Matthew Broderick',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910309/The_Lion_King_jybkxy.jpg',
    resume:
      'Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes get him into trouble.',
    genre: 'Animation',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166192/MovieApp/5_-_The_Lion_King_pffbh3.jpg',
    keywords: ['animated', 'coming-of-age', 'identity']
  },
  {
    name: 'Gladiator',
    director: 'Ridley Scott',
    year: '2000',
    actor: 'Russell Crowe',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910312/Gladiator_irsrn3.jpg',
    resume:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    genre: 'Action',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166200/MovieApp/6_-_Gladiator_kjihuk.jpg',
    keywords: ['action', 'ancient Rome', 'revenge']
  },
  {
    name: 'The Avengers',
    director: 'Joss Whedon',
    year: '2012',
    actor: 'Robert Downey Jr.',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910314/The_Avengers_vhyhfi.jpg',
    resume:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: 'Action',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166198/MovieApp/7_-_Avengers_Age_of_Ultron_izixxr.jpg',
    keywords: ['superheroes', 'team', 'alien invasion']
  },
  {
    name: 'Inglourious Basterds',
    director: 'Quentin Tarantino',
    year: '2009',
    actor: 'Brad Pitt',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910308/Inglorious_Basterds_poster_us4rru.jpg',
    resume:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    genre: 'War',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166196/MovieApp/8_-_Inglourious_Basterds_e6telo.jpg',
    keywords: ['World War II', 'assassination', 'vengeance']
  },
  {
    name: 'The Silence of the Lambs',
    director: 'Jonathan Demme',
    year: '1991',
    actor: 'Jodie Foster',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910327/thesilenceoflambs_zbvkbi.jpg',
    resume:
      'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
    genre: 'Thriller',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166192/MovieApp/9_-_The_Silence_of_the_Lambs_dwv1n3.jpg',
    keywords: ['thriller', 'serial killer', 'FBI']
  },
  {
    name: 'The Social Network',
    director: 'David Fincher',
    year: '2010',
    actor: 'Jesse Eisenberg',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910313/The_Social_Network_nuttzs.jpg',
    resume:
      'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.',
    genre: 'Drama',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166198/MovieApp/10_-_The_Social_Network_lguwct.jpg',
    keywords: ['Facebook', 'social networking', 'lawsuit']
  },
  {
    name: 'Interstellar',
    director: 'Christopher Nolan',
    year: '2014',
    actor: 'Matthew McConaughey',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910308/Interstellar_ugiiss.jpg',
    resume:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genre: 'Sci-Fi',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166192/MovieApp/11_-_Interstellar_fzotl1.jpg',
    keywords: ['space exploration', 'wormhole', 'humanity survival']
  },
  {
    name: 'The Green Mile',
    director: 'Frank Darabont',
    year: '1999',
    actor: 'Tom Hanks',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910308/The_Green_Mile_ptdtu5.jpg',
    resume:
      'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
    genre: 'Drama',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166324/MovieApp/Green-Mile-1999-4_zmqzpy.jpg',
    keywords: ['Death Row', 'guard', 'mysterious gift']
  },
  {
    name: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: '1994',
    actor: 'Tim Robbins',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910326/The_Shawshank_Redemption_smx0mh.jpg',
    resume:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: 'Drama',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166199/MovieApp/12_-_The_Shawshank_Redemption_timuet.jpg',
    keywords: ['prision', 'redemption', 'classic']
  },
  {
    name: 'The Dark Knight',
    director: 'Christopher Nolan',
    year: '2008',
    actor: 'Christian Bale',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910314/The_Dark_Knight_a2x24h.jpg',
    resume:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: 'Action',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166198/MovieApp/13_-_The_Dark_Knight_ntttbn.jpg',
    keywords: ['Violent', 'Dark', 'Superhero']
  },
  {
    name: 'The Matrix',
    director: 'Lana Wachowski',
    year: '1999',
    actor: 'Keanu Reeves',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910311/matrix_gydj5i.jpg',
    resume:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    genre: 'Sci-Fi',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166198/MovieApp/14_-_The_Matrix_htvsrz.jpg',
    keywords: ['hacker', 'fiction', 'war']
  },
  {
    name: "Schindler's List",
    director: 'Steven Spielberg',
    year: '1993',
    actor: 'Liam Neeson',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699992530/MovieApp/Schindler_s_List_ndcfjj.webp',
    resume:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    genre: 'Drama',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166198/MovieApp/15_-_Schindlers_List_sufbz9.jpg',
    keywords: ['World War', 'Holocaust', 'Workforce']
  },
  {
    name: 'The Departed',
    director: 'Martin Scorsese',
    year: '2006',
    actor: 'Leonardo DiCaprio',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910326/The_Departed_zqmaut.jpg',
    resume:
      'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    genre: 'Crime',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166323/MovieApp/the_departed1_hghhux.jpg',
    keywords: ['undercover', 'gangs', 'intiltration']
  },
  {
    name: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: '1972',
    actor: 'Marlon Brando',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910313/The_Godfather_kszu47.jpg',
    resume:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    genre: 'Crime',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166191/MovieApp/16_-_The_Godfather_yv3mbv.jpg',
    keywords: ['mafia', 'organized crime', 'family']
  },
  {
    name: 'Fight Club',
    director: 'David Fincher',
    year: '1999',
    actor: 'Brad Pitt',
    oscar: false,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910316/FightClub_md3kco.jpg',
    resume:
      'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    genre: 'Drama',
    score: 4,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166191/MovieApp/1_-_Fight_Club_c53gkl.jpg',
    keywords: ['violent', 'distopic', 'reality']
  },
  {
    name: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: '1994',
    actor: 'Tom Hanks',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910312/ForrestGump_jhelvm.jpg',
    resume:
      'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    genre: 'Drama',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166191/MovieApp/17_-_Forrest_Gump_mvxfrg.jpg',
    keywords: ['Vietnam War', 'historical events', 'childhood']
  },
  {
    name: 'The Lord of the Rings: The Return of the King',
    director: 'Peter Jackson',
    year: '2003',
    actor: 'Elijah Wood',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910326/lordOfRIngs_nvx0da.jpg',
    resume:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    genre: 'Fantasy',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166191/MovieApp/18_-_The_Lord_of_the_Rings_The_Return_of_the_King_ty1bbc.jpg',
    keywords: ['Epic', 'Thriller', 'Book']
  }
]

module.exports = seed
