import React, {Component} from 'react';
import Table from './Table';


class App extends Component {
//this is the main App that is being rendered in index.js by ReactDOM.render()
//in index.html, there is one element called root, this is targeted by getElementById
//in index.js and replaces the empty element with the React App.
    render() {

        const cities = [
            {
                "CityRank" : 1,
                "CityName" : "Chongqing",
                "Country" : "China",
                "Population" : 30165500,
                "CityType" : "Municipality",
                "CityKM" : 82403,
                "DensityKM" : 366
            },
            {
                "CityRank" : 2,
                "CityName" : "Shanghai",
                "Country" : "China",
                "Population" : 24183300,
                "CityType" : "Municipality",
                "CityKM" : 6340,
                "DensityKM" : 3814
            },
            {
                "CityRank" : 3,
                "CityName" : "Beijing",
                "Country" : "China",
                "Population" : 21707000,
                "CityType" : "Municipality",
                "CityKM" : 16411,
                "DensityKM" : 1267
            },
            {
                "CityRank" : 4,
                "CityName" : "Istanbul",
                "Country" : "Turkey",
                "Population" : 15029231,
                "CityType" : "Metropolitan Municipality",
                "CityKM" : 620,
                "DensityKM" : 24231
            },
            {
                "CityRank" : 5,
                "CityName" : "Karachi",
                "Country" : "Pakistan",
                "Population" : 14910352,
                "CityType" : "City",
                "CityKM" : 3780,
                "DensityKM" : 3944
            },
            {
                "CityRank" : 6,
                "CityName" : "Dhaka",
                "Country" : "Bangladesh",
                "Population" : 14399000,
                "CityType" : "City",
                "CityKM" : 337,
                "DensityKM" : 42659
            },
            {
                "CityRank" : 7,
                "CityName" : "Guangzhou",
                "Country" : "China",
                "Population" : 13081000,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 7434,
                "DensityKM" : 1760
            },
            {
                "CityRank" : 8,
                "CityName" : "Shenzhen",
                "Country" : "China",
                "Population" : 12528300,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 1992,
                "DensityKM" : 6889
            },
            {
                "CityRank" : 9,
                "CityName" : "Mumbai",
                "Country" : "India",
                "Population" : 12442373,
                "CityType" : "City",
                "CityKM" : 438,
                "DensityKM" : 28426
            },
            {
                "CityRank" : 10,
                "CityName" : "Moscow",
                "Country" : "Russia",
                "Population" : 13200000,
                "CityType" : "Federal City",
                "CityKM" : 2511,
                "DensityKM" : 5256
            },
            {
                "CityRank" : 11,
                "CityName" : "São Paulo",
                "Country" : "Brazil",
                "Population" : 12038000,
                "CityType" : "Municipality",
                "CityKM" : 1081,
                "DensityKM" : 11199
            },
            {
                "CityRank" : 12,
                "CityName" : "Kinshasa",
                "Country" : "Democratic Republic of the Congo",
                "Population" : 11462000,
                "CityType" : "City Province",
                "CityKM" : 473,
                "DensityKM" : 24195
            },
            {
                "CityRank" : 13,
                "CityName" : "Tianjin",
                "Country" : "China",
                "Population" : 11249000,
                "CityType" : "Municipality",
                "CityKM" : 11920,
                "DensityKM" : 944
            },
            {
                "CityRank" : 14,
                "CityName" : "Lahore",
                "Country" : "Pakistan",
                "Population" : 11126000,
                "CityType" : "Metropolitan Area",
                "CityKM" : 503,
                "DensityKM" : 22139
            },
            {
                "CityRank" : 15,
                "CityName" : "Delhi",
                "Country" : "India",
                "Population" : 11034555,
                "CityType" : "Union Territory",
                "CityKM" : 462,
                "DensityKM" : 23893
            },
            {
                "CityRank" : 16,
                "CityName" : "Jakarta",
                "Country" : "indonesia",
                "Population" : 10624000,
                "CityType" : "Special Capital Region",
                "CityKM" : 662,
                "DensityKM" : 16060
            },
            {
                "CityRank" : 17,
                "CityName" : "Dongguan",
                "Country" : "China",
                "Population" : 10615000,
                "CityType" : "City",
                "CityKM" : 2460,
                "DensityKM" : 4315
            },
            {
                "CityRank" : 18,
                "CityName" : "Seoul",
                "Country" : "South Korea",
                "Population" : 9806000,
                "CityType" : "Special City",
                "CityKM" : 605,
                "DensityKM" : 16202
            },
            {
                "CityRank" : 19,
                "CityName" : "Foshan",
                "Country" : "China",
                "Population" : 9279000,
                "CityType" : "City",
                "CityKM" : 3797,
                "DensityKM" : 2444
            },
            {
                "CityRank" : 20,
                "CityName" : "Tokyo",
                "Country" : "Japan",
                "Population" : 9273000,
                "CityType" : "Metropolis",
                "CityKM" : 626,
                "DensityKM" : 14790
            },
            {
                "CityRank" : 21,
                "CityName" : "Chengdu",
                "Country" : "China",
                "Population" : 9012000,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 14312,
                "DensityKM" : 630
            },
            {
                "CityRank" : 22,
                "CityName" : "Lima",
                "Country" : "Peru",
                "Population" : 8894000,
                "CityType" : "City",
                "CityKM" : 2672,
                "DensityKM" : 3329
            },
            {
                "CityRank" : 23,
                "CityName" : "Mexico City",
                "Country" : "Mexico",
                "Population" : 8875000,
                "CityType" : "Capital City",
                "CityKM" : 607,
                "DensityKM" : 14616
            },
            {
                "CityRank" : 24,
                "CityName" : "London",
                "Country" : "United Kingdom",
                "Population" : 8825000,
                "CityType" : "Capital City",
                "CityKM" : 1572,
                "DensityKM" : 5614
            },
            {
                "CityRank" : 25,
                "CityName" : "Tehran",
                "Country" : "Iran",
                "Population" : 8694000,
                "CityType" : "City",
                "CityKM" : 574,
                "DensityKM" : 15143
            },
            {
                "CityRank" : 26,
                "CityName" : "New York",
                "Country" : "United States",
                "Population" : 8622698,
                "CityType" : "City",
                "CityKM" : 786,
                "DensityKM" : 19066
            },
            {
                "CityRank" : 27,
                "CityName" : "Bangalore",
                "Country" : "India",
                "Population" : 8443675,
                "CityType" : "City",
                "CityKM" : 709,
                "DensityKM" : 11909
            },
            {
                "CityRank" : 28,
                "CityName" : "Shenyang",
                "Country" : "China",
                "Population" : 8106171,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 12980,
                "DensityKM" : 625
            },
            {
                "CityRank" : 29,
                "CityName" : "Wuhan",
                "Country" : "China",
                "Population" : 8035000,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 8494,
                "DensityKM" : 946
            },
            {
                "CityRank" : 30,
                "CityName" : "Bogotá",
                "Country" : "Columbia",
                "Population" : 7963000,
                "CityType" : "Capital District",
                "CityKM" : 428,
                "DensityKM" : 18594
            },
            {
                "CityRank" : 31,
                "CityName" : "Cairo",
                "Country" : "Egypt",
                "Population" : 7601018,
                "CityType" : "City",
                "CityKM" : 303,
                "DensityKM" : 25582
            },
            {
                "CityRank" : 32,
                "CityName" : "Ningbo",
                "Country" : "China",
                "Population" : 7605689,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 9816,
                "DensityKM" : 775
            },
            {
                "CityRank" : 33,
                "CityName" : "Ho Chi Minh City",
                "Country" : "Vietnam",
                "Population" : 7431000,
                "CityType" : "City",
                "CityKM" : 454,
                "DensityKM" : 16382
            },
            {
                "CityRank" : 34,
                "CityName" : "Nanjing",
                "Country" : "China",
                "Population" : 7260000,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 6582,
                "DensityKM" : 1103
            },
            {
                "CityRank" : 35,
                "CityName" : "Hong Kong",
                "Country" : "China",
                "Population" : 7298600,
                "CityType" : "Special Administrative Region",
                "CityKM" : 1104,
                "DensityKM" : 6608
            },
            {
                "CityRank" : 36,
                "CityName" : "Hanoi",
                "Country" : "Vietnam",
                "Population" : 7232700,
                "CityType" : "Metropolitan Municipality-Province",
                "CityKM" : 3325,
                "DensityKM" : 2176
            },
            {
                "CityRank" : 37,
                "CityName" : "Changsha",
                "Country" : "China",
                "Population" : 7044118,
                "CityType" : "City",
                "CityKM" : 11819,
                "DensityKM" : 596
            },
            {
                "CityRank" : 38,
                "CityName" : "Hangzhou",
                "Country" : "China",
                "Population" : 7035000,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 851,
                "DensityKM" : 8268
            },
            {
                "CityRank" : 39,
                "CityName" : "Ahmedabad",
                "Country" : "India",
                "Population" : 7021000,
                "CityType" : "City",
                "CityKM" : 351,
                "DensityKM" : 19991
            },
            {
                "CityRank" : 40,
                "CityName" : "Hyderabad",
                "Country" : "India",
                "Population" : 6993262,
                "CityType" : "City",
                "CityKM" : 652,
                "DensityKM" : 11494
            },
            {
                "CityRank" : 41,
                "CityName" : "Baghdad",
                "Country" : "Iraq",
                "Population" : 6793000,
                "CityType" : "Metropolis",
                "CityKM" : 425,
                "DensityKM" : 16001
            },
            {
                "CityRank" : 42,
                "CityName" : "Chennai",
                "Country" : "India",
                "Population" : 6727000,
                "CityType" : "Municipal Corporation",
                "CityKM" : 427,
                "DensityKM" : 15772
            },
            {
                "CityRank" : 43,
                "CityName" : "Riyadh",
                "Country" : "Saudi Arabia",
                "Population" : 6694000,
                "CityType" : "City",
                "CityKM" : 411,
                "DensityKM" : 16288
            },
            {
                "CityRank" : 44,
                "CityName" : "Rio De Janeiro",
                "Country" : "Brazil",
                "Population" : 6520000,
                "CityType" : "Municipality",
                "CityKM" : 751,
                "DensityKM" : 8677
            },
            {
                "CityRank" : 45,
                "CityName" : "Xi`an",
                "Country" : "China",
                "Population" : 6220000,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 10135,
                "DensityKM" : 614
            },
            {
                "CityRank" : 46,
                "CityName" : "Suzhou",
                "Country" : "China",
                "Population" : 5983000,
                "CityType" : "City",
                "CityKM" : 8488,
                "DensityKM" : 705
            },
            {
                "CityRank" : 47,
                "CityName" : "Surat",
                "Country" : "India",
                "Population" : 5868000,
                "CityType" : "City",
                "CityKM" : 210,
                "DensityKM" : 27916
            },
            {
                "CityRank" : 48,
                "CityName" : "Bangkok",
                "Country" : "Thailand",
                "Population" : 5782000,
                "CityType" : "Special Administrative Area",
                "CityKM" : 765,
                "DensityKM" : 7561
            },
            {
                "CityRank" : 49,
                "CityName" : "Santiago",
                "Country" : "Chile",
                "Population" : 5561000,
                "CityType" : "City",
                "CityKM" : 595,
                "DensityKM" : 9339
            },
            {
                "CityRank" : 50,
                "CityName" : "Singapore",
                "Country" : "Republic of Singapore",
                "Population" : 5607000,
                "CityType" : "City-State",
                "CityKM" : 603,
                "DensityKM" : 9302
            },
            {
                "CityRank" : 51,
                "CityName" : "Shantoou",
                "Country" : "China",
                "Population" : 5391028,
                "CityType" : "City",
                "CityKM" : 2064,
                "DensityKM" : 2611
            },
            {
                "CityRank" : 52,
                "CityName" : "Saint Petersburg",
                "Country" : "Russia",
                "Population" : 5351000,
                "CityType" : "City",
                "CityKM" : 463,
                "DensityKM" : 11554
            },
            {
                "CityRank" : 53,
                "CityName" : "Harbin",
                "Country" : "China",
                "Population" : 5299000,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 614,
                "DensityKM" : 8626
            },
            {
                "CityRank" : 54,
                "CityName" : "Dar Es Salaam",
                "Country" : "Tanzania",
                "Population" : 5257000,
                "CityType" : "City",
                "CityKM" : 331,
                "DensityKM" : 15905
            },
            {
                "CityRank" : 55,
                "CityName" : "Yangon",
                "Country" : "Myanmar",
                "Population" : 5214000,
                "CityType" : "Metropolitan Municipality-Province",
                "CityKM" : 599,
                "DensityKM" : 8708
            },
            {
                "CityRank" : 56,
                "CityName" : "Johannesburg",
                "Country" : "South Africa",
                "Population" : 4949000,
                "CityType" : "Metropolitan Municipality",
                "CityKM" : 433,
                "DensityKM" : 11434
            },
            {
                "CityRank" : 57,
                "CityName" : "Abidjan",
                "Country" : "Ivory Coast",
                "Population" : 4765000,
                "CityType" : "Department/City District",
                "CityKM" : 2119,
                "DensityKM" : 2249
            },
            {
                "CityRank" : 58,
                "CityName" : "Alexandria",
                "Country" : "Egypt",
                "Population" : 4616625,
                "CityType" : "Governorate",
                "CityKM" : 2300,
                "DensityKM" : 2007
            },
            {
                "CityRank" : 59,
                "CityName" : "Kolkata",
                "Country" : "India",
                "Population" : 4496694,
                "CityType" : "India",
                "CityKM" : 185,
                "DensityKM" : 24306
            },
            {
                "CityRank" : 60,
                "CityName" : "Ankara",
                "Country" : "Turkey",
                "Population" : 4470800,
                "CityType" : "Metropolitan Municipality-Province",
                "CityKM" : 1911,
                "DensityKM" : 2340
            },
            {
                "CityRank" : 61,
                "CityName" : "Rome Capital",
                "Country" : "Italy",
                "Population" : 4353738,
                "CityType" : "Metropolitan City",
                "CityKM" : 5363,
                "DensityKM" : 812
            },
            {
                "CityRank" : 62,
                "CityName" : "Giza",
                "Country" : "Egypt",
                "Population" : 4239988,
                "CityType" : "Governorate",
                "CityKM" : 289,
                "DensityKM" : 14667
            },
            {
                "CityRank" : 63,
                "CityName" : "Zhengzhou",
                "Country" : "China",
                "Population" : 4122087,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 1016,
                "DensityKM" : 4059
            },
            {
                "CityRank" : 64,
                "CityName" : "Los Angeles",
                "Country" : "United States",
                "Population" : 3976322,
                "CityType" : "Municipality City",
                "CityKM" : 1214,
                "DensityKM" : 3276
            },
            {
                "CityRank" : 65,
                "CityName" : "New Taipei City",
                "Country" : "Taiwan",
                "Population" : 3954929,
                "CityType" : "Special Municipality",
                "CityKM" : 2053,
                "DensityKM" : 1927
            },
            {
                "CityRank" : 66,
                "CityName" : "Cape Town",
                "Country" : "South Africa",
                "Population" : 3740026,
                "CityType" : "Metropolitan Municipality",
                "CityKM" : 2445,
                "DensityKM" : 1530
            },
            {
                "CityRank" : 67,
                "CityName" : "Yokohama",
                "Country" : "Japan",
                "Population" : 3726167,
                "CityType" : "Designated City",
                "CityKM" : 437,
                "DensityKM" : 8517
            },
            {
                "CityRank" : 68,
                "CityName" : "Berlin",
                "Country" : "Germany",
                "Population" : 3671000,
                "CityType" : "City-State",
                "CityKM" : 892,
                "DensityKM" : 4117
            },
            {
                "CityRank" : 69,
                "CityName" : "Busan",
                "Country" : "South Korea",
                "Population" : 3590000,
                "CityType" : "Metropolitan City",
                "CityKM" : 347,
                "DensityKM" : 10331
            },
            {
                "CityRank" : 70,
                "CityName" : "Xiamen",
                "Country" : "China",
                "Population" : 3531347,
                "CityType" : "Sub-Provincial City",
                "CityKM" : 1699,
                "DensityKM" : 2078
            },
            {
                "CityRank" : 71,
                "CityName" : "Jeddah",
                "Country" : "Saudi Arabia",
                "Population" : 3456259,
                "CityType" : "Saudi Arabia",
                "CityKM" : 1765,
                "DensityKM" : 1958
            },
            {
                "CityRank" : 72,
                "CityName" : "Durban",
                "Country" : "South Africa",
                "Population" : 3442361,
                "CityType" : "Metropolitan Municipality",
                "CityKM" : 2291,
                "DensityKM" : 1502
            },
            {
                "CityRank" : 73,
                "CityName" : "Kabul",
                "Country" : "Afghanistan",
                "Population" : 3414100,
                "CityType" : "Municipality City",
                "CityKM" : 275,
                "DensityKM" : 12415
            },
            {
                "CityRank" : 74,
                "CityName" : "Casablanca",
                "Country" : "Morocco",
                "Population" : 3359818,
                "CityType" : "Prefecture",
                "CityKM" : 230,
                "DensityKM" : 14608
            },
            {
                "CityRank" : 75,
                "CityName" : "Hefei",
                "Country" : "China",
                "Population" : 3352076,
                "CityType" : "City",
                "CityKM" : 839,
                "DensityKM" : 3998
            },
            {
                "CityRank" : 76,
                "CityName" : "Pyongyang",
                "Country" : "North korea",
                "Population" : 3255388,
                "CityType" : "Direct-Controlled Municipality",
                "CityKM" : 2113,
                "DensityKM" : 1541
            },
            {
                "CityRank" : 77,
                "CityName" : "Madrid",
                "Country" : "Spain",
                "Population" : 3207247,
                "CityType" : "Municipality City",
                "CityKM" : 606,
                "DensityKM" : 5294
            },
            {
                "CityRank" : 78,
                "CityName" : "Faisalabad",
                "Country" : "Pakistan",
                "Population" : 3202846,
                "CityType" : "City District",
                "CityKM" : 214,
                "DensityKM" : 14971
            },
            {
                "CityRank" : 79,
                "CityName" : "Ekurhuleni",
                "Country" : "South Africa",
                "Population" : 3178470,
                "CityType" : "Metropolitan Municipality",
                "CityKM" : 1975,
                "DensityKM" : 1609
            },
            {
                "CityRank" : 80,
                "CityName" : "Nairobi",
                "Country" : "Kenya",
                "Population" : 3138369,
                "CityType" : "Capital District",
                "CityKM" : 695,
                "DensityKM" : 4829
            },
            {
                "CityRank" : 81,
                "CityName" : "Zhongshan",
                "Country" : "China",
                "Population" : 3121275,
                "CityType" : "City",
                "CityKM" : 1784,
                "DensityKM" : 1750
            },
            {
                "CityRank" : 82,
                "CityName" : "Pune",
                "Country" : "India",
                "Population" : 3115431,
                "CityType" : "Municipal Corporation",
                "CityKM" : 451,
                "DensityKM" : 6913
            },
            {
                "CityRank" : 83,
                "CityName" : "Addis Ababa",
                "Country" : "Ethopia",
                "Population" : 3103673,
                "CityType" : "Metropolitan Municipality-Province",
                "CityKM" : 527,
                "DensityKM" : 5889
            },
            {
                "CityRank" : 84,
                "CityName" : "Jaipur",
                "Country" : "India",
                "Population" : 3073350,
                "CityType" : "Municipal Corporation",
                "CityKM" : 485,
                "DensityKM" : 6337
            },
            {
                "CityRank" : 85,
                "CityName" : "Buenos Aires",
                "Country" : "Argentina",
                "Population" : 3054300,
                "CityType" : "Federal District",
                "CityKM" : 203,
                "DensityKM" : 15046
            },
            {
                "CityRank" : 86,
                "CityName" : "Wenzhou",
                "Country" : "China",
                "Population" : 3039439,
                "CityType" : "City",
                "CityKM" : 1188,
                "DensityKM" : 2559
            },
            {
                "CityRank" : 87,
                "CityName" : "Incheon",
                "Country" : "South Korea",
                "Population" : 3002645,
                "CityType" : "Metropolitan City",
                "CityKM" : 329,
                "DensityKM" : 9139
            }
        ]
        ;

        return (
        //notice that we use className not class below, this is JS and not HTML.
        //returns the elements and props below to the Table class, now the Table
        //class (component) can use the props {characters}, we'll call it with 
        //props.characterData in the child component of the Table Class in Table.js
            <div className = "container">
                <Table characterData = {cities} />
            </div>
        );
    }
}

export default App;