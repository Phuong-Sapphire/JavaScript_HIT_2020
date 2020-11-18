const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
  ];
  function countByGender(listPersons, gender){
      let count = 0;
      for(let i in listPersons){
          if(listPersons[i].gender == gender){
              count++;
          }
      }
      return count;
  }
  function statisticsByAge(listPerson) {
      let statistics = {
          children : 0,
          adult : 0,
          older : 0,
      };
      for(let x of listPersons){
          if(x.age < 18 ){
              statistics.children++;
          }
          else if(x.age >= 18 && x.age <=30){
              statistics.adult++;
          }
          else statistics.older++;
      }
      return statistics;
  }
  function main(){
    console.log(`danh sách có ${countByGender(listPersons, 'nam')} nam`);
    console.log(`danh sách có ${countByGender(listPersons, 'nữ')} nữ`);
    console.log(statisticsByAge(listPersons));
  }
  main();