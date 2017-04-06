// app.js is the main JS file which you should define your Angular module

angular
  .module('galleryA', [])
  .controller('CtrlOne', CtrlOne)
  .controller('CtrlTwo', CtrlTwo)
  .controller('CtrlThree', CtrlThree);

function CtrlOne(){
  const vm = this;
  vm.hours = [
    {
      day: 'Friday',
      name: '10:00am - 9:00pm'
    },
    {
      day: 'Monday',
      name: '10:00am - 9:00pm'
    },
    {
      day: ' Saturday',
      name: '10:00am - 9:00pm'
    },
    {
      day: 'Sunday',
      name: 'Sunday: 10:00am - 9:00pm'
    },
    {
      day: 'Thursday',
      name: 'Thursday: 10:00am - 9:00pm'
    },
    {
      day: 'Tuesday',
      name: '10:00am - 9:00pm'
    },
    {
      day: 'Wednesday',
      name: 'Wednesday: 10:00am - 9:00pm'
    }
  ];

  vm.admissions = [
    {
      name: 'Adults - $25'
    },
    {
      name: 'Seniors - $17'
    },
    {
      name: 'Students - $12'
    }
  ];
}

function CtrlTwo(){
  const vm = this;
  vm.pic = 'http://www.ats-heritage.co.uk/news/wp-content/uploads/2015/08/sargent-NPG.jpg';
  vm.blahyh = 'Sargent portraits of Artists & Friends';
  vm.blahna = 'By John Sargent';
}

function CtrlThree(){
  const vm = this;
  vm.email = 'development@metmuseum.org';
  vm.number = '212-650-2425';
  vm.dmamounts = [
    {
      price: '$50'
    },
    {
      price: '$100'
    },
    {
      price: '$250'
    },
    {
      price: '$500'
    },
    {
      price: '$1000'
    },
    {
      price: '$5000'
    }
  ];

}
