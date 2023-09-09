import {$authHost, $authHostWithoutHeaders} from './main'

export const booksAPI = {
    async getAllBooks(authorId?: number, isAlreadyRead?: boolean) {
        let response = await $authHost.get(`api/books`)
        if(authorId && isAlreadyRead) {
            response = await $authHost.get(`api/books?authorId=${authorId}&isAlreadyRead=${isAlreadyRead}`)
        } else if(authorId && !isAlreadyRead) {
            response = await $authHost.get(`api/books?authorId=${authorId}`)
        } else if(!authorId && isAlreadyRead) {
            response = await $authHost.get(`api/booksisAlreadyRead=${isAlreadyRead}`)
        }

        return response;
    },
    /*async getDoneExercisesByDate(startDate, endDate) {
        const response = await $authHost.post(`api/statistics/graph/exercises-done`, {startDate, endDate})
        return response;
    }*/
}
