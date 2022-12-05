import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() {} 
   getBooks():any{
  
  let data= [
      {
        name:'Clean Code',
        author:'Robert C Martin',
        src:'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amt: 700
    
      },
      {
        name:'The Pragmatic Programmer',
        author:'David Thomas ',
        src:'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        amt: 900
      },
      {
        name:'Cracking the Coding Interview',
        author:'Gayle Laakmann McDowell ',
        src:'https://m.media-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg',
        amt: 569
      },
      {
        name:'Data Structures And Algorithms',
        author:'Narasimha Karumanchi ',
        src:'https://m.media-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg',
        amt:650
      },
      {
        name:'Introduction to Algorithms',
        author:' T Cormen, C Leiserson, R Rivest, C Stein',
        src:'https://m.media-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
        amt:1350
      }
    ]
    return data

}
}
