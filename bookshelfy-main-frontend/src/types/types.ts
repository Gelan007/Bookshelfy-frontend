export type BookType = {
    id: number
    name: string
    description: string | null
    type: string | null
    photo: string | null
    rating: number | null
    isAlreadyRead: boolean
    publicationYear: string | null
    authorId: number
    userId: number
    marks?: Array<string>
}