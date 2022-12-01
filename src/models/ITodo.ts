import { ICard } from './ICard';
import { IDictionary } from './IDictionary';

export interface ITodo {
    id?: string;
    title: string;
    cards: IDictionary<ICard>;
}
