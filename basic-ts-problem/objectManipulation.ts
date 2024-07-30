type Book = {
    title: string;
    author: string;
    year: number;
}

const books: Book[] = [
    { title: 'Deyal', author: 'Humayon Ahmed', year: 2015 },
    { title: '2024', author: 'Students', year: 2024 },
    { title: 'To Kill a Nation', author: 'Hasina', year: 2024 }
];

function getBookTitles(books: Book[]): string[] {
    return books.map(book => book.title);
}

const titles = getBookTitles(books);
console.log(titles);