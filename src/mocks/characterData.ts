// https://api.disneyapi.dev/character/3347 at 2025-01-02
const mockCharacterResponse = {
  info: {
    count: 1,
    totalPages: 1,
    previousPage: null,
    nextPage: null,
  },
  data: {
    _id: 3347,
    films: [
      'Aladdin (film)',
      'The Return of Jafar',
      'Aladdin and the King of Thieves',
      "Mickey's Magical Christmas: Snowed in at the House of Mouse",
      "Mickey's House of Villains",
      'Once Upon a Halloween',
      'Descendants',
      'Aladdin (2019 film)',
    ],
    shortFilms: ['Electric Holiday'],
    tvShows: [
      'Hercules (TV series)',
      'House of Mouse',
      'Once Upon a Time in Wonderland',
      'Once Upon a Time',
      'Mickey Mouse (TV series)',
    ],
    videoGames: [
      'Aladdin (video game)',
      "Disney's ReadingQuest With Aladdin",
      "Disney's Aladdin in Nasira's Revenge",
      'Kingdom Hearts (series)',
      'Disney Princess (video game)',
      'Disney Universe',
      'Epic Mickey: Power of Illusion',
      'Hidden Worlds',
      'Disney Infinity (series)',
      'Disney Villains Challenge',
      'Disney Crossy Road',
      'Disney Emoji Blitz',
      'Disney Magic Kingdoms',
      'Disney Tsum Tsum (game)',
      'Disney Heroes: Battle Mode',
      "Disney Sorcerer's Arena",
      'Disney Getaway Blast',
      'Disney Mirrorverse',
    ],
    parkAttractions: [
      'Fantasmic!',
      'Villains Tonight!',
      'Sorcerers of the Magic Kingdom',
      "Disney's Maleficious Halloween Party",
      'Starlight Dreams',
      "Mickey's Boo-to-You Halloween Parade",
      'Aladdin: A Musical Spectacular',
      'Disney Stars and Motorcars Parade',
      'Midship Detective Agency',
      'World of Color',
      'Hocus Pocus Villain Spelltacular',
      "Cinderella's Surprise Celebration",
      'Happily Ever After (fireworks show)',
    ],
    allies: [],
    enemies: [],
    sourceUrl: 'https://disney.fandom.com/wiki/Jafar',
    name: 'Jafar',
    imageUrl:
      'https://static.wikia.nocookie.net/disney/images/6/60/Profile_-_Jafar.jpeg',
    createdAt: '2021-04-12T02:14:41.972Z',
    updatedAt: '2021-12-20T20:39:51.128Z',
    url: 'https://api.disneyapi.dev/characters/3347',
    __v: 0,
  },
};

// Helper to get just the character data
export const mockCharacter = mockCharacterResponse.data;
