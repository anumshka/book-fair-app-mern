const products = [
  {
    _id: '1',
    name: 'Ariel',
    image: '/images/ariel.png',
    description:
      'When Sylvia Plath died, she not only left behind a prolific life but also her unpublished literary masterpiece, Ariel. Her husband, Ted Hughes, brought the collection to life in 1966, and its publication garnered worldwide acclaim. This collection showcases the beloved poet/’s brilliant, provoking, and always moving poems, including "Ariel" and once again shows why readers have fallen in love with her work throughout the generations.',
    brand: 'Sylvia Plath',
    category: 'Poetry',
    price: 150,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'The Bell Jar',
    image: '/images/bell-jar.png',
    description:
      "The Bell Jar chronicles the crack-up of Esther Greenwood: brilliant, beautiful, enormously talented, and successful, but slowly going under—maybe for the last time. Sylvia Plath masterfully draws the reader into Esther's breakdown with such intensity that Esther 's insanity becomes completely real and even rational, as probable and accessible an experience as going to the movies. Such deep penetration into the dark and harrowing corners of the psyche is an extraordinary accomplishment and has made The Bell Jar a haunting American classic.",
    brand: 'Sylvia Plath',
    category: 'Novel',
    price: 300,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Pride and Prejudice',
    image: '/images/pride-and-pred.png',
    description:
      'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, as delightful a creature as ever appeared in print. The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen\'s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England. ',
    brand: 'Jane Austen',
    category: 'Novel',
    price: 400,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Rebecca',
    image: '/images/rebecca.png',
    description:
      'Last night I dreamt I went to Manderley again..The novel begins in Monte Carlo, where our heroine is swept off her feet by the dashing widower Maxim de Winter and his sudden proposal of marriage. Orphaned and working as a ladys maid, she can barely believe her luck. It is only when they arrive at his massive country estate that she realizes how large a shadow his late wife will cast over their lives--presenting her with a lingering evil that threatens to destroy their marriage from beyond the grave.',
    brand: 'Daphne du Maurier',
    category: 'Novel',
    price: 400,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
]
//es modules
export default products
