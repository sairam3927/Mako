export const orders = [
  {
    name: 'Orders',
    series: [
      {
        name: "1980",
        value: 21632
      }
    ]
  }
]

export const products = [
  {
    "name": "Product-1",
    "value": 69400
  },
  {
    "name": "Product-2",
    "value": 59400
  },
  {
    "name": "Product-3",
    "value": 82400
  },
  {
    "name": "Product-4",
    "value": 73400
  },
  {
    "name": "Product-5",
    "value": 25400
  },
  {
    "name": "Product-6",
    "value": 23400
  },
  {
    "name": "Product-7",
    "value": 49300
  },
  {
    "name": "Product-8",
    "value": 55400
  },
  {
    "name": "Product-9",
    "value": 37400
  },
  {
    "name": "Product-10",
    "value": 65220
  },
  {
    "name": "Product-11",
    "value": 79400
  },
  {
    "name": "Product-12",
    "value": 58400
  },
  {
    "name": "Product-13",
    "value": 41400
  },
  {
    "name": "Product-14",
    "value": 37400
  },
  {
    "name": "Product-15",
    "value": 33700
  },
  {
    "name": "Product-16",
    "value": 42700
  },
  {
    "name": "Product-17",
    "value": 52700
  },
  {
    "name": "Product-18",
    "value": 62700
  }
]

export const customers = [
  {
    name: 'Customers',
    series: [
      {
        name: "2000",
        value: 34502
      }
    ]
  }
]

export const refunds = [
  {
    "name": "Item-1",
    "value": 23701
  },
  {
    "name": "Item-2",
    "value": 33701
  },
  {
    "name": "Item-3",
    "value": 63701
  },
  {
    "name": "Item-4",
    "value": 52701
  },
  {
    "name": "Item-5",
    "value": 73701
  },
  {
    "name": "Item-6",
    "value": 43701
  },
  {
    "name": "Item-7",
    "value": 83701
  },
  {
    "name": "Item-8",
    "value": 29701
  },
  {
    "name": "Item-9",
    "value": 69701
  },
  {
    "name": "Item-10",
    "value": 58701
  },
  {
    "name": "Item-11",
    "value": 65701
  },
  {
    "name": "Item-12",
    "value": 47701
  },
  {
    "name": "Item-13",
    "value": 41701
  },
  {
    "name": "Item-14",
    "value": 25701
  },
  {
    "name": "Item-15",
    "value": 35701
  }
]

export const disk_space = [
  {
    "name": "Disk C:",
    "value": 178
  },
  {
    "name": "Disk D:",
    "value": 340
  },
  {
    "name": "Disk E:",
    "value": 280
  }
]

var tempArray = [];
var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var scheduledAarray = [15, 8, 12, 4, 22, 25, 36, 10, 17, 39, 19, 28, 20, 19, 29, 39, 59, 36, 39, 59, 35, 36, 28, 17, 39, 19, 28, 6, 7, 30, 22];
var completedArray =  [10, 6, 4,  1, 15, 5,  12, 4,  12, 16, 17, 10, 9,  6, 14, 22, 25, 19, 10, 17, 25, 19, 8, 9, 30, 4, 19, 5, 1, 20, 21];
var scheduledObj = { name: "Referrals", series: [] };
var completedObj = { name: "Visits", series: [] };
for (var i = 1; i <= 31; i++) {
  // prospectsObj.series.push({"name": i, value: Math.floor(Math.random() * 20)+1});
  scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
  completedObj.series.push({ "name": arr[i - 1], value: completedArray[i - 1] });
}
tempArray.push(scheduledObj, completedObj);


var temporaryArray = [];
var arra = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var scheduledAarr = [25, 18, 42, 4, 27, 25, 36, 15, 17, 39, 29, 38, 20, 20, 49, 29, 39, 26, 19, 49, 37, 30, 28, 27, 39, 19, 36, 6, 7, 35, 29];
var completedArr =  [15, 16, 40,  1, 17, 15,32, 14,  15, 36, 27, 30, 19,16, 44, 22, 25, 19, 15, 47, 27, 25, 18, 19, 30, 14, 35, 5, 1, 20, 20];
var scheduledObject = { name: "Billing", series: [] };
var completedObject = { name: "Collections", series: [] };
for (var i = 1; i <= 31; i++) {
  // prospectsObj.series.push({"name": i, value: Math.floor(Math.random() * 20)+1});
  scheduledObject.series.push({ "name": arra[i - 1], value: scheduledAarr[i - 1] });
  completedObject.series.push({ "name": arra[i - 1], value: completedArr[i - 1] });
}
temporaryArray.push(scheduledObject, completedObject);

export const analytics = tempArray;

export const analysis = temporaryArray;
/* export const analytics = [
  {
    name: 'Company 1',
    series: [
      {
        name: '2010',
        value: 31632
      },
      {
        name: '2011',
        value: 42589
      },
      {
        name: '2012',
        value: 52458
      },
      {
        name: '2013',
        value: 69632
      },
      {
        name: '2014',
        value: 52305
      },
      {
        name: '2015',
        value: 72412
      },
      {
        name: '2016',
        value: 66285
      },
      {
        name: '2017',
        value: 49855
      }
    ]
  },
  {
    name: 'Company 2',
    series: [
      {
        name: '2010',
        value: 61632
      },
      {
        name: '2011',
        value: 68589
      },
      {
        name: '2012',
        value: 55458
      },
      {
        name: '2013',
        value: 62632
      },
      {
        name: '2014',
        value: 38305
      },
      {
        name: '2015',
        value: 41412
      },
      {
        name: '2016',
        value: 32285
      },
      {
        name: '2017',
        value: 31855
      }
    ]
  },
  {
    name: 'Company 3',
    series: [
      {
        name: '2010',
        value: 55632
      },
      {
        name: '2011',
        value: 63589
      },
      {
        name: '2012',
        value: 70458
      },
      {
        name: '2013',
        value: 79632
      },
      {
        name: '2014',
        value: 59305
      },
      {
        name: '2015',
        value: 56412
      },
      {
        name: '2016',
        value: 49285
      },
      {
        name: '2017',
        value: 38855
      }
    ]
  }
] */