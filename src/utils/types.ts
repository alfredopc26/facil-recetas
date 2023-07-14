export interface IRecette {
    title?: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
}

export interface ICategory {
    title?: string;
    image?: string;
}

export interface ILiveItems {
    username?: string;
    image?: string;
    title?: string;
}

export interface IChefItems {
    username?: string;
    image?: string;
    numberRecipes?: number;
}

export interface IRecipesCard {
    title?: string;
    time?: number;
    ingredientTotal?: number;
    image?: string;
    saved?:boolean;
}

export interface IUser{
    name: string;
    username: string;
    email: string;   
    photo?: string; 
}