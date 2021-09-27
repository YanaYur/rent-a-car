const cars = [
  // MICRO
  {
    id: 1,
    model: "500",
    make: "Fiat",
    capacity: 4,
    type: "micro",
    price: 70,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/micro_fiat_500.jpg",
  },
  {
    id: 2,
    model: "Twingo",
    make: "Renault",
    capacity: 4,
    type: "micro",
    price: 55,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/micro_renault_twingo.jpg",
  },
  {
    id: 3,
    model: "108",
    make: "Peugeot",
    capacity: 4,
    type: "micro",
    price: 40,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/micro_peugeot_108.jpg",
  },
  {
    id: 4,
    model: "108",
    make: "Peugeot",
    capacity: 4,
    type: "micro",
    price: 65,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/micro_peugeot_108.jpg",
  },
  // SEDAN
  {
    id: 5,
    model: "A6",
    make: "Audi",
    capacity: 5,
    type: "sedan",
    price: 145,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/sedan_audi.jpg",
  },
  {
    id: 6,
    model: "Megane",
    make: "Renault",
    capacity: 5,
    type: "sedan",
    price: 130,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/sedan_renault.jpg",
  },
  {
    id: 7,
    model: "S60",
    make: "Volvo",
    capacity: 5,
    type: "sedan",
    price: 175,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/sedan_volvo.jpg",
  },
  // {
  //    id:8,
  //     model: 'Passat',
  //     make: 'Volkswagen',
  //     capacity: 5,
  //     type: 'sedan',
  //     price: 160,
  //     image_url: 'https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/sedan_volkswagen.jpg',
  // },
  // 4x4
  {
    id: 9,
    model: "Q6",
    make: "Audi",
    capacity: 5,
    type: "4x4",
    price: 240,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/4x4_audi.jpg",
  },
  {
    id: 10,
    model: "F-Pace",
    make: "Jaguar",
    capacity: 5,
    type: "4x4",
    price: 235,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/4x4_jaguar.jpg",
  },
  // {
  // id:11,//
  // model: 'Class G',
  //     make: 'Mercedes',
  //     capacity: 5,
  //     type: '4x4',
  //     price: 260,
  //     image_url: 'https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/sedan_mercedes.jpg',
  // },
  {
    id: 12,
    model: "3008",
    make: "Peugeot",
    capacity: 5,
    type: "4x4",
    price: 195,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/4x4_peugeot.jpg",
  },
  // SUPER
  {
    id: 13,
    model: "812",
    make: "Ferrari",
    capacity: 2,
    type: "super",
    price: 360,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/super_ferrari.jpg",
  },
  {
    id: 14,
    model: "XK-JR",
    make: "Jaguar",
    capacity: 4,
    type: "super",
    price: 320,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/super_jaguar.jpg",
  },
  {
    id: 15,
    model: "GTR",
    make: "Nissan",
    capacity: 4,
    type: "super",
    price: 310,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/super_nissan.jpg",
  },
  {
    id: 16,
    model: "Supra",
    make: "Toyota",
    capacity: 4,
    type: "super",
    price: 305,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/super_toyota.jpg",
  },
  // VANS
  {
    id: 17,
    model: "Transit",
    make: "Ford",
    capacity: 6,
    type: "van",
    price: 140,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/van_ford.jpg",
  },
  {
    id: 18,
    model: "Vito",
    make: "Mercedes",
    capacity: 8,
    type: "van",
    price: 140,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/van_mercedes.jpg",
  },
  {
    id: 19,
    model: "Traffic",
    make: "Renault",
    capacity: 8,
    type: "van",
    price: 140,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/van_renault.jpg",
  },
  // {
  // id:120,
  // model: 'Transporter',
  //     make: 'Volkswagen',
  //     capacity: 6,e
  //     type: 'van',
  //     price: 140,
  //     image_url: 'https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/van_volkswagen.jpg',
  // },
];

const MILISECONDS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

async function getAvailableCars({ location, from, to }) {
  const days = _calcDaysDiffBetweenDates(from, to);

  const filteredCars = cars.map((car) => {
    car.totalPrice = car.price * days;
    return car;
  });

  return { results: filteredCars, total: filteredCars.length, types: [], days };
}

function _calcDaysDiffBetweenDates(from, to) {
  const days = (to.getTime() - from.getTime()) / MILISECONDS_IN_ONE_DAY;
  return Math.round(days);
}

export default { getAvailableCars };
