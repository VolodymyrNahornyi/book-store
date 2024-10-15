import {Book} from "../model/book.model";
import {EventEmitter, Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable, of, combineLatest} from "rxjs";

@Injectable()
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925,
      genre: "Fiction",
      isbn: "978-0743273565",
      publisher: "Charles Scribner's Sons",
      pageCount: 180,
      language: "English",
      summary: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
      coverImage: "https://m.media-amazon.com/images/I/71nNFtlHxHL._SL1500_.jpg",
      rating: 4.5,
      publishedDate: new Date("1925-04-10"),
      keywords: ["classic", "American literature", "Jazz Age", "tragedy"],
      price: 20.99,
      discountPrice: 14.99,
      isAvailable: true
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationYear: 1960,
      genre: "Fiction",
      isbn: "978-0060935467",
      publisher: "J.B. Lippincott & Co.",
      pageCount: 281,
      language: "English",
      summary: "A novel about the serious issues of rape and racial inequality.",
      coverImage: "https://marketplace.canva.com/EAF2FK6OWRM/2/0/752w/canva-brown-and-blue-wizard-fantasy-novel-book-cover-BylerPQ7Ne8.png",
      rating: 4.8,
      publishedDate: new Date("1960-07-11"),
      keywords: ["classic", "American literature", "civil rights", "coming-of-age"],
      price: 18.59,
      isAvailable: true
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      publicationYear: 1949,
      genre: "Dystopian Fiction",
      isbn: "978-0451524935",
      publisher: "Secker & Warburg",
      pageCount: 328,
      language: "English",
      summary: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
      coverImage: "https://marketplace.canva.com/EAFZc43RODQ/1/0/1003w/canva-aesthetic-minimalist-photo-collage-love-story-book-cover-hTYG_lxFolQ.jpg",
      rating: 4.7,
      publishedDate: new Date("1949-06-08"),
      keywords: ["dystopia", "political fiction", "totalitarianism"],
      price: 32.99,
      isAvailable: false
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publicationYear: 1951,
      genre: "Fiction",
      isbn: "978-0316769488",
      publisher: "Little, Brown and Company",
      pageCount: 277,
      language: "English",
      summary: "A story about teenage alienation and loss of innocence in post-war America.",
      coverImage: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
      rating: 4.0,
      publishedDate: new Date("1951-07-16"),
      keywords: ["coming-of-age", "classic", "American literature"],
      price: 12.99,
      discountPrice: 7.99,
      isAvailable: false
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publicationYear: 1937,
      genre: "Fantasy",
      isbn: "978-0547928227",
      publisher: "George Allen & Unwin",
      pageCount: 310,
      language: "English",
      summary: "A fantasy novel about the adventures of a hobbit named Bilbo Baggins.",
      coverImage: "https://marketplace.canva.com/EAFZfrpK8D4/1/0/1003w/canva-dark-minimalist-vintage-portrait-photo-ripped-paper-book-cover-TDLQ377Qb9o.jpg",
      rating: 4.8,
      publishedDate: new Date("1937-09-21"),
      keywords: ["fantasy", "adventure", "classic"],
      price: 16.99,
      discountPrice: 7.99,
      isAvailable: true
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publicationYear: 1813,
      genre: "Romance",
      isbn: "978-1503290563",
      publisher: "T. Egerton, Whitehall",
      pageCount: 279,
      language: "English",
      summary: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
      coverImage: "https://marketplace.canva.com/EAFKA0RgDtw/1/0/1003w/canva-brown-and-orange-elegant-simple-young-adult-fantasy-book-cover-Qb8uSVdJDzw.jpg",
      rating: 4.6,
      publishedDate: new Date("1813-01-28"),
      keywords: ["romance", "classic", "social commentary"],
      price: 68.99,
      isAvailable: true
    },
    {
      id: 7,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      publicationYear: 1890,
      genre: "Philosophical Fiction",
      isbn: "978-0141439570",
      publisher: "Lippincott's Monthly Magazine",
      pageCount: 254,
      language: "English",
      summary: "A novel about a young man who wishes to remain eternally youthful while a portrait of him ages.",
      coverImage: "https://marketplace.canva.com/EAF9qT1w74Y/1/0/752w/canva-blue-and-yellow-corporate-business-book-cover-LM6WSHZwXco.png",
      rating: 4.3,
      publishedDate: new Date("1890-07-01"),
      keywords: ["classic", "philosophical fiction", "Gothic"],
      price: 44.99,
      discountPrice: 9.99,
      isAvailable: true
    },
    {
      id: 8,
      title: "Moby Dick",
      author: "Herman Melville",
      publicationYear: 1851,
      genre: "Adventure Fiction",
      isbn: "978-1503280786",
      publisher: "Richard Bentley",
      pageCount: 585,
      language: "English",
      summary: "The narrative of Captain Ahab's obsessive quest to kill the white whale, Moby Dick.",
      coverImage: "https://marketplace.canva.com/EAFaEkYFwCo/1/0/1003w/canva-black-and-grey-dark-forest-aesthetic-book-cover-l5DUkKB05Tc.jpg",
      rating: 4.0,
      publishedDate: new Date("1851-10-18"),
      keywords: ["adventure", "classic", "whaling"],
      price: 52.99,
      isAvailable: false
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      publicationYear: 1932,
      genre: "Dystopian Fiction",
      isbn: "978-0060850524",
      publisher: "Chatto & Windus",
      pageCount: 311,
      language: "English",
      summary: "A dystopian novel that explores the effects of technology and societal control on humanity.",
      coverImage: "https://marketplace.canva.com/EAFQ08wTzpY/1/0/1003w/canva-blue-white-simple-mountain-and-cloud-landscape-photo-book-cover-0xEou6iLWRU.jpg",
      rating: 4.6,
      publishedDate: new Date("1932-08-31"),
      keywords: ["dystopia", "science fiction", "philosophy"],
      price: 17.99,
      isAvailable: false
    },
    {
      id: 10,
      title: "The Alchemist",
      author: "Paulo Coelho",
      publicationYear: 1988,
      genre: "Fiction",
      isbn: "978-0062315007",
      publisher: "HarperCollins",
      pageCount: 208,
      language: "Portuguese",
      summary: "A novel about a young shepherd's journey to realize his personal legend.",
      coverImage: "https://marketplace.canva.com/EAFpS1ceGQQ/1/0/1003w/canva-colorful-modern-cookbook-book-cover-YTEX1G_wu18.jpg",
      rating: 4.4,
      publishedDate: new Date("1988-04-15"),
      keywords: ["self-discovery", "philosophy", "inspiration"],
      price: 12.99,
      discountPrice: 3.99,
      isAvailable: true
    },
    {
      id: 11,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      publicationYear: 2003,
      genre: "Mystery",
      isbn: "978-0307474278",
      publisher: "Doubleday",
      pageCount: 689,
      language: "English",
      summary: "A mystery thriller that follows symbologist Robert Langdon as he unravels a murder in the Louvre.",
      coverImage: "https://marketplace.canva.com/EAFxw_2FxsA/1/0/752w/canva-black-illustrated-gothic-medieval-kingdom-story-book-cover-1UYAoTpoa70.png",
      rating: 4.2,
      publishedDate: new Date("2003-03-18"),
      keywords: ["mystery", "thriller", "historical fiction"],
      price: 34.99,
      discountPrice: 7.99,
      isAvailable: true
    },
    {
      id: 12,
      title: "The Catch-22",
      author: "Joseph Heller",
      publicationYear: 1961,
      genre: "Satire",
      isbn: "978-1451626650",
      publisher: "Simon & Schuster",
      pageCount: 453,
      language: "English",
      summary: "A satirical novel set during World War II, focusing on a squadron of U.S. Army Air Forces.",
      coverImage: "https://marketplace.canva.com/EAFd8-1gR9k/1/0/1003w/canva-pink-watercolor-leaves-notebook-book-cover-t7kmGvX8ks8.jpg",
      rating: 4.3,
      publishedDate: new Date("1961-11-10"),
      keywords: ["satire", "war", "classic"],
      price: 14.99,
      isAvailable: true
    },
    {
      id: 13,
      title: "War and Peace",
      author: "Leo Tolstoy",
      publicationYear: 1869,
      genre: "Historical Fiction",
      isbn: "978-1420954302",
      publisher: "The Russian Messenger",
      pageCount: 1225,
      language: "Russian",
      summary: "A historical novel that intertwines the lives of several families during the Napoleonic Wars.",
      coverImage: "https://marketplace.canva.com/EAF2CwryWEU/1/0/752w/canva-blue-and-green-cartoon-illustrative-love-story-book-cover-6PvSHMbI608.png",
      rating: 4.4,
      publishedDate: new Date("1869-01-01"),
      keywords: ["historical fiction", "classic", "war"],
      price: 78.99,
      isAvailable: false
    },
    {
      id: 14,
      title: "The Road",
      author: "Cormac McCarthy",
      publicationYear: 2006,
      genre: "Post-Apocalyptic Fiction",
      isbn: "978-0307387899",
      publisher: "Alfred A. Knopf",
      pageCount: 287,
      language: "English",
      summary: "A harrowing tale of a father and son's journey through a post-apocalyptic landscape.",
      coverImage: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
      rating: 4.6,
      publishedDate: new Date("2006-09-26"),
      keywords: ["post-apocalyptic", "survival", "literary fiction"],
      price: 88.99,
      discountPrice: 24.99,
      isAvailable: false
    },
    {
      id: 15,
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      publicationYear: 1985,
      genre: "Dystopian Fiction",
      isbn: "978-0385490818",
      publisher: "McClelland and Stewart",
      pageCount: 311,
      language: "English",
      summary: "A dystopian novel set in a totalitarian society that treats women as property of the state.",
      coverImage: "https://marketplace.canva.com/EAFlHhpAMfU/1/0/1003w/canva-purple-and-red-modern-illustrative-kids-book-cover-UFY7x2CvVhg.jpg",
      rating: 4.4,
      publishedDate: new Date("1985-04-17"),
      keywords: ["dystopia", "feminism", "classic"],
      price: 18.99,
      discountPrice: 10.99,
      isAvailable: true
    },
    {
      id: 16,
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      publicationYear: 2003,
      genre: "Fiction",
      isbn: "978-1594631931",
      publisher: "Riverhead Books",
      pageCount: 371,
      language: "English",
      summary: "A story of friendship and redemption, set against the backdrop of a changing Afghanistan.",
      coverImage: "https://marketplace.canva.com/EAGKkPbakT4/1/0/752w/canva-purple-sky-book-cover-3GWYYWw7vAM.png",
      rating: 4.7,
      publishedDate: new Date("2003-05-29"),
      keywords: ["friendship", "redemption", "historical fiction"],
      price: 16.99,
      isAvailable: false
    },
    {
      id: 17,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      publicationYear: 2008,
      genre: "Dystopian Fiction",
      isbn: "978-0439023481",
      publisher: "Scholastic Press",
      pageCount: 374,
      language: "English",
      summary: "A dystopian novel about a televised competition in which children fight to the death.",
      coverImage: "https://marketplace.canva.com/EAFtkYzzrKE/1/0/1003w/canva-blue-and-green-illustrative-animal-story-book-cover-XK25AoC7Qu8.jpg",
      rating: 4.5,
      publishedDate: new Date("2008-09-14"),
      keywords: ["dystopia", "young adult", "action"],
      price: 66.99,
      isAvailable: true
    },
    {
      id: 18,
      title: "The Fault in Our Stars",
      author: "John Green",
      publicationYear: 2012,
      genre: "Young Adult Fiction",
      isbn: "978-0525478812",
      publisher: "Dutton Books",
      pageCount: 313,
      language: "English",
      summary: "A love story between two teens who meet at a cancer support group.",
      coverImage: "https://marketplace.canva.com/EAGE-qyRobM/2/0/752w/canva-pink-floral-watercolor-prayer-journal-book-cover-undtHwMekts.png",
      rating: 4.2,
      publishedDate: new Date("2012-01-10"),
      keywords: ["young adult", "romance", "cancer"],
      price: 12.99,
      discountPrice: 7.99,
      isAvailable: true
    },
    {
      id: 19,
      title: "Gone Girl",
      author: "Gillian Flynn",
      publicationYear: 2012,
      genre: "Thriller",
      isbn: "978-0307588371",
      publisher: "Crown Publishing Group",
      pageCount: 432,
      language: "English",
      summary: "A thriller that examines the secrets of a seemingly perfect marriage.",
      coverImage: "https://marketplace.canva.com/EAFY729lDrY/1/0/1003w/canva-brown-mystery-novel-book-cover-4DDntvlI-Fc.jpg",
      rating: 4.1,
      publishedDate: new Date("2012-06-05"),
      keywords: ["thriller", "mystery", "psychological"],
      price: 16.99,
      isAvailable: false
    },
    {
      id: 20,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      publicationYear: 2019,
      genre: "Psychological Thriller",
      isbn: "978-1250301697",
      publisher: "Celadon Books",
      pageCount: 336,
      language: "English",
      summary: "A psychological thriller about a woman who stops speaking after committing a crime.",
      coverImage: "https://marketplace.canva.com/EAFoP0vf7uo/1/0/1003w/canva-purple-watercolor-notebook-book-cover-odV0fzpIc3s.jpg",
      rating: 4.3,
      publishedDate: new Date("2019-02-05"),
      keywords: ["thriller", "mystery", "psychological"],
      price: 111.99,
      isAvailable: true
    }
  ];

  private bookSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(this.books);
  public books$: Observable<Book[]> = this.bookSubject.asObservable()

  private filterSubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  public filterSubject$: Observable<string> = this.filterSubject.asObservable()

  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchSubject$: Observable<string> = this.searchSubject.asObservable()

  setSearchTerm(searchTerm: string){
    this.searchSubject.next(searchTerm);
  }

  setFilter(filter: string){
    this.filterSubject.next(filter);
  }

  public totalBooks$: Observable<number> = this.getFilteredBooks().pipe(
    map((books) => books.length)
  );

  public availableBooks$: Observable<number> = this.getFilteredBooks().pipe(
    map(books => books.filter(book => book.isAvailable).length)
  );

  public outOfStockBooks$: Observable<number> = this.getFilteredBooks().pipe(
    map(books => books.filter(book => !book.isAvailable).length)
  );

  selectedBookEvent: EventEmitter<Book> = new EventEmitter<Book>();

  onSelectedBook(book: Book) {
    this.selectedBookEvent.emit(book);
  }

  getFilteredBooks(): Observable<Book[]> {
    return combineLatest([this.books$, this.filterSubject$, this.searchSubject$]).pipe(
      map(([books, filter, searchTerm]) => {
        const filteredByAvailability = this.applyAvailabilityFilter(books, filter);
        return this.applySearchTermFilter(filteredByAvailability, searchTerm);
      })
    );
  }

  private applyAvailabilityFilter(books: Book[], filter: string): Book[] {
    return books.filter(book =>
      filter === 'all' ||
      (filter === 'available' && book.isAvailable) ||
      (filter === 'outOfStock' && !book.isAvailable)
    );
  }

  private applySearchTermFilter(books: Book[], searchTerm: string): Book[] {
    return books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getRecentBooks(): Observable<Book[]> {
    return of(this.books.sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
      .slice(0, 4));
  }
}
