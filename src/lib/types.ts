export interface Yell {
    date: number;
    speaker: string;
    message: string;
}

export interface ProfileResponse {
    status: string;
    jwt: string;
    profile: Profile;
    errors: Errors;
}

export interface Profile {
    id: number;
    login: string;
    email?: string;
    timecreate: string;
    timelastmodify: string;
    chars: any[];
}

export interface Errors {
    server: string;
    client: {
        username: boolean;
        password: boolean;
        confirmPassword: boolean;
        email: boolean;
    };
}

export interface CharsSearch {
    total: number;
    chars: CharsSearchItem[];
}

export interface CharsSearchItem {
    charname: string;
    title: string;
    jobString: string;
    avatar: string;
}

export interface ItemsSearch {
    total: number;
    items: SearchItem[];
}
export interface SearchItem {
    id: number;
    name: string;
    sort: string;
    key: string;
}

/* -------------------------------------------------------------------------- */
/*                               Character Info                               */
/* -------------------------------------------------------------------------- */
export interface Character {
    id: number;
    name: string;
    nation: number;
    mentor: number;
    nameflags: number;
    title: string;
    jobString: string;
    avatar: string;
    online: number;
    jobs: Jobs;
    ranks: Ranks;
}

export interface Jobs {
    WAR: number;
    MNK: number;
    WHM: number;
    BLM: number;
    RDM: number;
    THF: number;
    PLD: number;
    DRK: number;
    BST: number;
    BRD: number;
    RNG: number;
    SAM: number;
    NIN: number;
    DRG: number;
    SMN: number;
    BLU: number;
    COR: number;
    PUP: number;
    DNC: number;
    SCH: number;
}

export interface Ranks {
    sandoria: number;
    bastok: number;
    windurst: number;
}

export interface Crafts {
    Fishing: number;
    Woodworking: number;
    Smithing: number;
    Goldsmithing: number;
    Clothcraft: number;
    Leathercraft: number;
    Bonecraft: number;
    Alchemy: number;
    Cooking: number;
    Synergy: number;
}

export interface Equip {
    main: Equipment;
    sub: Equipment;
    ranged: Equipment;
    ammo: Equipment;
    head: Equipment;
    body: Equipment;
    hands: Equipment;
    legs: Equipment;
    feet: Equipment;
    neck: Equipment;
    waist: Equipment;
    ear1: Equipment;
    ear2: Equipment;
    ring1: Equipment;
    ring2: Equipment;
    back: Equipment;
    ls1: Equipment;
    ls2: Equipment;
}

export interface Equipment {
    equipslotid: number;
    itemid?: number;
    name?: string;
    signature?: string;
}

export interface AuctionHouseItem {
    date?: number;
    itemid?: number;
    name: string;
    stack_size: string;
    seller_name: string;
    buyer_name: any;
    sale: number;
    price?: number;
    sell_date: number;
}

export interface Item {
    armor: string;
    stackable: boolean;
    id: number;
    name: string;
    sort: string;
    desc: string;
    key: string;
}

export interface BazaarItem {
    itemid?: number;
    name: string;
    bazaar: number;
}

export interface BazaarSearchItem {
    charname: string;
    name: string;
    bazaar: number;
    itemid?: number;
    zone?: string;
    online_flag: number;
}

export interface InventoryItem {
    itemid: number;
    name: string;
    slot: number;
    quantity: number;
}

export interface Inventory {
    [id: string]: InventoryItem[];
}
