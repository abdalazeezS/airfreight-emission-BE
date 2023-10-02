const trips = [
  {
    "id": 1,
    "emission_level": 90,
    "origin": "Kayes",
    "destination": "Cincinnati",
    "airline": "Pimenta Bueno Airport",
    "date": "10/06/2024"
  },
  {
    "id": 2,
    "emission_level": 105,
    "origin": "Hongtang",
    "destination": "Varāmīn",
    "airline": "Brisbane International Airport",
    "date": "27/10/2023"
  },
  {
    "id": 3,
    "emission_level": 147,
    "origin": "Lefkoniko",
    "destination": "Portel",
    "airline": "Melinda Airport",
    "date": "05/01/2024"
  },
  {
    "id": 4,
    "emission_level": 78,
    "origin": "Yangba",
    "destination": "Quivilla",
    "airline": "Beni Airport",
    "date": "24/10/2023"
  },
  {
    "id": 5,
    "emission_level": 31,
    "origin": "Gaofeng",
    "destination": "Yihe",
    "airline": "Yanji Chaoyangchuan Airport",
    "date": "20/01/2024"
  },
  {
    "id": 6,
    "emission_level": 34,
    "origin": "Alimono",
    "destination": "Jiuguan",
    "airline": "Neumünster Airport",
    "date": "09/02/2024"
  },
  {
    "id": 7,
    "emission_level": 65,
    "origin": "Tawau",
    "destination": "Castillos",
    "airline": "Aseki Airport",
    "date": "19/02/2024"
  },
  {
    "id": 8,
    "emission_level": 95,
    "origin": "Falun",
    "destination": "Ili",
    "airline": "Hartsfield Jackson Atlanta International Airport",
    "date": "29/06/2024"
  },
  {
    "id": 9,
    "emission_level": 135,
    "origin": "Manokwari",
    "destination": "Kolpashevo",
    "airline": "Trunojoyo Airport",
    "date": "24/08/2024"
  },
  {
    "id": 10,
    "emission_level": 26,
    "origin": "Mohelnice",
    "destination": "Jacura",
    "airline": "Spring Creek Airport",
    "date": "13/10/2023"
  },
  {
    "id": 11,
    "emission_level": 79,
    "origin": "Värnamo",
    "destination": "That Phanom",
    "airline": "Fascene Airport",
    "date": "01/09/2024"
  },
  {
    "id": 12,
    "emission_level": 73,
    "origin": "Miami",
    "destination": "Ibarra",
    "airline": "Sub Teniente Nestor Arias Airport",
    "date": "25/04/2024"
  },
  {
    "id": 13,
    "emission_level": 46,
    "origin": "Barbosa",
    "destination": "Gradec",
    "airline": "Hopedale Airport",
    "date": "03/01/2024"
  },
  {
    "id": 14,
    "emission_level": 57,
    "origin": "Göteborg",
    "destination": "Inhambane",
    "airline": "Cabo F.A.A. H. R. Bordón Airport",
    "date": "27/07/2024"
  },
  {
    "id": 15,
    "emission_level": 21,
    "origin": "Bangkalan",
    "destination": "Kadipaten",
    "airline": "Vanimo Airport",
    "date": "07/06/2024"
  },
  {
    "id": 16,
    "emission_level": 96,
    "origin": "Staromyshastovskaya",
    "destination": "Goris",
    "airline": "Tanjung Santan Airport",
    "date": "28/05/2024"
  },
  {
    "id": 17,
    "emission_level": 95,
    "origin": "Shuikou",
    "destination": "Phoenix",
    "airline": "Ivanof Bay Seaplane Base",
    "date": "15/07/2024"
  },
  {
    "id": 18,
    "emission_level": 73,
    "origin": "Villa Santa Rita",
    "destination": "Bangus Kulon",
    "airline": "Toulouse-Blagnac Airport",
    "date": "10/11/2023"
  },
  {
    "id": 19,
    "emission_level": 69,
    "origin": "Kertahayu",
    "destination": "Slovenske Konjice",
    "airline": "Sheremetyevo International Airport",
    "date": "23/04/2024"
  },
  {
    "id": 20,
    "emission_level": 140,
    "origin": "Goussainville",
    "destination": "Balky",
    "airline": "Bukhovtsi Airfield",
    "date": "12/02/2024"
  },
  {
    "id": 21,
    "emission_level": 134,
    "origin": "Antagan Segunda",
    "destination": "Laholm",
    "airline": "Aragarças Airport",
    "date": "18/07/2024"
  },
  {
    "id": 22,
    "emission_level": 47,
    "origin": "Vale Boeiro",
    "destination": "Huaqiao",
    "airline": "Julius Nyerere International Airport",
    "date": "04/02/2024"
  },
  {
    "id": 23,
    "emission_level": 97,
    "origin": "Pakemitan Dua",
    "destination": "Byczyna",
    "airline": "Fahud Airport",
    "date": "18/04/2024"
  },
  {
    "id": 24,
    "emission_level": 71,
    "origin": "Longtian",
    "destination": "La Garenne-Colombes",
    "airline": "Liberal Mid-America Regional Airport",
    "date": "16/09/2024"
  },
  {
    "id": 25,
    "emission_level": 57,
    "origin": "Saint-Eustache",
    "destination": "Girijaya",
    "airline": "Z M Jack Stell Field",
    "date": "26/07/2024"
  },
  {
    "id": 26,
    "emission_level": 113,
    "origin": "Pinega",
    "destination": "Ngadipuro",
    "airline": "Woodward Field",
    "date": "30/12/2023"
  },
  {
    "id": 27,
    "emission_level": 97,
    "origin": "Kijini",
    "destination": "Camperdown",
    "airline": "Siirt Airport",
    "date": "15/06/2024"
  },
  {
    "id": 28,
    "emission_level": 86,
    "origin": "Xike",
    "destination": "Santiago de Chuco",
    "airline": "Ust-Tsylma Airport",
    "date": "09/01/2024"
  },
  {
    "id": 29,
    "emission_level": 33,
    "origin": "Mahdalynivka",
    "destination": "Jinji",
    "airline": "Kotoka International Airport",
    "date": "07/07/2024"
  },
  {
    "id": 30,
    "emission_level": 45,
    "origin": "Dalmeny",
    "destination": "Paraiso",
    "airline": "Boulder Municipal Airport",
    "date": "17/05/2024"
  },
];


const origins = [
  "Kayes",
  "Hongtang",
  "Lefkoniko",
  "Yangba",
  "Gaofeng",
  "Alimono",
  "Tawau",
  "Falun",
  "Manokwari",
  "Mohelnice",
  "Värnamo",
  "Miami",
  "Barbosa",
  "Göteborg",
  "Bangkalan",
  "Staromyshastovskaya",
  "Shuikou",
  "Villa S",
  "Kertahayu",
  "Goussainville",
  "Antagan S",
  "Vale B",
  "Pakemitan D",
  "Longtian",
  "Saint-E",
  "Pinega",
  "Kijini",
  "Xike",
  "Mahdalynivka",
  "Dalmeny",
];
origins.sort((a, b) => a.localeCompare(b));

const destinations = [
  "Cincinnati",
  "Varāmīn",
  "Portel",
  "Quivilla",
  "Yihe",
  "Jiuguan",
  "Castillos",
  "Ili",
  "Kolpashevo",
  "Jacura",
  "That Phanom",
  "Ibarra",
  "Gradec",
  "Inhambane",
  "Kadipaten",
  "Goris",
  "Phoenix",
  "Bangus Kulon",
  "Slovenske Konjice",
  "Balky",
  "Laholm",
  "Huaqiao",
  "Byczyna",
  "La Garenne-Colombes",
  "Girijaya",
  "Ngadipuro",
  "Camperdown",
  "Santiago de Chuco",
  "Jinji",
  "Paraiso",
];
destinations.sort((a, b) => a.localeCompare(b));

const airlines = [
  "Pimenta Bueno Airport",
  "Brisbane International Airport",
  "Melinda Airport",
  "Beni Airport",
  "Yanji Chaoyangchuan Airport",
  "Neumünster Airport",
  "Aseki Airport",
  "Hartsfield Jackson Atlanta International Airport",
  "Trunojoyo Airport",
  "Spring Creek Airport",
  "Fascene Airport",
  "Sub Teniente Nestor Arias Airport",
  "Hopedale Airport",
  "Cabo F.A.A. H. R. Bordón Airport",
  "Vanimo Airport",
  "Tanjung Santan Airport",
  "Ivanof Bay Seaplane Base",
  "Toulouse-Blagnac Airport",
  "Sheremetyevo International Airport",
  "Bukhovtsi Airfield",
  "Aragarças Airport",
  "Julius Nyerere International Airport",
  "Fahud Airport",
  "Liberal Mid-America Regional Airport",
  "Z M Jack Stell Field",
  "Woodward Field",
  "Siirt Airport",
  "Ust-Tsylma Airport",
  "Kotoka International Airport",
  "Boulder Municipal Airport",
]
airlines.sort((a, b) => a.localeCompare(b));

export { trips, origins, destinations, airlines };