import partnerProjectImages from '@images/partners';

export interface PartnerProject {
  image: string;
  name: string;
  url: string;
}

interface Config {
  partnerProjects: PartnerProject[];
}

const config: Config = {
  partnerProjects: [
    {
      image: partnerProjectImages.DDEX,
      name: 'DDEX',
      url: 'https://ddex.io/'
    },
    {
      image: partnerProjectImages.SharkRelay,
      name: 'Shark Relay',
      url: 'https://sharkrelay.com/'
    },
    {
      image: partnerProjectImages.Virtuse,
      name: 'Virtuse',
      url: 'https://virtuse.exchange/'
    },
    {
      image: partnerProjectImages.Amadeus,
      name: 'Amadeus',
      url: 'http://www.amadeus.com/'
    },
    {
      image: partnerProjectImages.Haven,
      name: 'Havven',
      url: 'https://havven.io/'
    },
    {
      image: partnerProjectImages.Dg,
      name: 'DG',
      url: 'https://digix.global/'
    },
    {
      image: partnerProjectImages.Maker,
      name: 'Maker',

      url: 'https://makerdao.com/'
    }
  ]
};

export default config;
