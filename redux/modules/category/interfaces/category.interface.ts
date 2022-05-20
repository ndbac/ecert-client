export interface Category {
    _id: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    slug: string,
    photoUrl: string,
    userId: string,
    postCount: string
}

export interface CategoryState {
    sent: boolean,
    loading: boolean,
    serverErr: string | undefined
}

// export interface CategoryGet {
//     searchText: string,
//     page?: number,
//     limit?: number,
//     sort?: boolean,
//     userId: string
// }

export interface CategoryPost {
    name: string,
    photoUrl: string,
    token: string
}

// export interface CategoryUpdate {
//     categoryId: string,
//     token: string,
//     name: string,
//     photoUrl: string
// }

// export interface CategoryDelete {
//     categoryId: string,
//     token: string
// }
