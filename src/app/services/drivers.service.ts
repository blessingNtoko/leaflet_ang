import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  public SOCIALS = [
    {
      name: 'Havanna',
      location: {
        lat: 23.222915,
        lng: 24.168330
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img1.jpg',
      likes: 0

    },
    {
      name: 'Cuba',
      location: {
        lat: 29.262779,
        lng: 25.198255
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img2.jpg',
      likes: 0

    },
    {
      name: 'Daalsim',
      location: {
        lat: 23.282115,
        lng: 22.174620
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img3.jpg',
      likes: 0

    },
    {
      name: 'La Referance',
      location: {
        lat: 21.239965,
        lng: 26.115130
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img4.jpg',
      likes: 0

    },
    {
      name: 'Bobbies',
      location: {
        lat: 24.274565,
        lng: 20.192340
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img5.jpg',
      likes: 0

    },
    {
      name: 'WestMinster',
      location: {
        lat: 24.247825,
        lng: 26.155670
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img6.jpg',
      likes: 0

    },
    {
      name: 'The Jubilee',
      location: {
        lat: 21.289535,
        lng: 22.151230
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img7.jpg',
      likes: 0

    },
    {
      name: 'The Chill Spot',
      location: {
        lat: 28.252129,
        lng: 24.125230
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img8.jpg',
      likes: 0

    },
    {
      name: 'Contamination',
      location: {
        lat: 28.232452,
        lng: 22.188359
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img9.jpg',
      likes: 0

    },
    {
      name: 'Jah Man',
      location: {
        lat: 25.292335,
        lng: 27.178739
      },
      rating: '4/5',
      reviews: {
        review1: 'Havanna oh nah nah',
        review2: 'This place is amazing!!!!'
      },
      image: '../assets/img10.jpg',
      likes: 0

    },
  ];

  public selectedDriver: number = null;

  constructor() { }

  getDrivers() {
    return this.SOCIALS;
  }

}
