

export interface GetCharacterResProps {
  uuid: string;
  book: {
    uuid: string;
    title: string;
  }
  name: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
  physhicalDescription?: string;
  personality?: string;
  roleStory?: string;
  developmentArc?: string;
  motivations?: string;
  backstory?: string;
  relationships?: relationships[];
  significantQuotes?: {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    text: string;
  }[]
  myComments?: {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    text: string;
  }[]
}

interface relationships {
  uuid: string;
  character: {
    uuid: string;
    name: string;
  }
  relationshipType: 
    'Amizade' | 
    'Romance' | 
    'Profissional' | 
    'Mentor' | 
    'Protegido' |
    'Rival' |
    'Aliado' |
    'Inimigo' |
    'Mestre' |
    'Servo' |
    'Pai' |
    'Mãe' |
    'Filho(a)' |
    'Cônjuge' |
    'Ex cônjuge';
  coment: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostCharacterProps {
  bookId: string;
  name: string;
  physhicalDescription?: string;
  image?: string;
}

export interface PutCharacterProps {
  uuid: string;
  name?: string;
  physhicalDescription?: string;
  personality?: string;
  roleStory?: string;
  developmentArc?: string;
  motivations?: string;
  backstory?: string;
}

export interface PostSignificantQuotesEntryProps {
  characterId: string;
  text: string;
}

export interface PostSignificantQuotesEntryProps {
  significantQuotesId: string;
  text: string;
}

export interface PostmyCommentsEntryProps {
  characterId: string;
  text: string;
}

export interface PostmyCommentsEntryProps {
  significantQuotesId: string;
  text: string;
}