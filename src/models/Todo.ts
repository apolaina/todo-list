import { Card } from './Card';
import { Dictionary } from './Dictionary';

export type Todo = {
    id?: string;
    title: string;
    cards: Dictionary<Card>;
}
