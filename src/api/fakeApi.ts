import {characterListElementType, characterListType} from "../constants";

export const heroesList = {
    get: ():Promise<characterListType> => new Promise((resolve) => {
        setTimeout(() => {
            const list =localStorage.getItem('list');
            resolve(JSON.parse(list!))
        }, 600)
    }),
    post: (newVal: characterListElementType):Promise<characterListType> => new Promise((resolve) => {
        setTimeout(() => {
            const list =JSON.parse(localStorage.getItem('list')!);
            list.push({...newVal, id: `${ + list[list.length - 1].id + 1}`})
            localStorage.setItem('list', JSON.stringify(list))
            resolve(list)
        }, 600)
    }),
}

export const singleHero = {
    get: (id: string):Promise<characterListElementType> => new Promise((resolve) => {
        setTimeout(() => {
            const list =JSON.parse(localStorage.getItem('list')!);
            const element = list.find((el:characterListElementType) => el.id === id)
            resolve(element);
        }, 600)
    }),
}