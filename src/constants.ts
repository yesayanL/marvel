export type characterListElementType = {
    name: string;
    image: string;
    description: string;
    id?: string
}

export type characterListType = Array<characterListElementType>

export const charactersList:characterListType = [
    {
        name: "Thor",
        image: "https://ichef.bbci.co.uk/images/ic/640x360/p09t1hg0.jpg",
        description: "dlkdfjasdkfj laksjdf lkasdjf laksjdf laskdjf alskj falsj fdaslk jfaslkd fjaslkdf jasldkjf asdf sdf",
        id: '0',
    },
    {
        name: "Loki",
        image: "https://hips.hearstapps.com/hmg-prod/images/is-loki-alive-1618935098.jpeg",
        description: "dlkdfjasdkfj laksjdf lkasdjf laksjdf laskdjf alskj falsj fdaslk jfaslkd fjaslkdf jasldkjf asdf sdf",
        id: '1',
    },
    {
        name: "Hulk",
        image: "https://m.economictimes.com/thumb/msid-72400227,width-1200,height-900,resizemode-4,imgsize-349917/mark-ruffalo-has-essayed-the-fan-favourite-character-and-its-alter-ego-bruce-banner-in-seven-mcu-movies-including-the-cameos-in-iron-man-3-and-captain-marvel-.jpg",
        description: "dlkdfjasdkfj laksjdf lkasdjf laksjdf laskdjf alskj falsj fdaslk jfaslkd fjaslkdf jasldkjf asdf sdf",
        id: '2',
    },
]
