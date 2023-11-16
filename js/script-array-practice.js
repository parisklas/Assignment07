//STEP 1
  // let favMovies = ['Inception', 'Get Out', 'Bridesmaids', 'Donnie Darko', 'A Beautiful Mind'];
  // console.log(favMovies[1]);

//STEP 2
  // let movies = new Array(5);
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // console.log(movies[0]);

//STEP 3
  // let movies = new Array(5);
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies.splice(2, 0,'Scary Movie');
  // console.log(movies.length);

//STEP 4
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // delete movies[0];
  // console.log(movies);

//STEP 5
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';
  // for (let i = 0; i < movies.length; i++) {
  //   console.log(movies[i]);
  // }

//STEP 6
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';
  // for (let i of movies) {
  //   console.log(i);
  // }

//STEP 7
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';
  // for (let i of movies) {
  //     let sorted = movies.sort();
  //     console.log(sorted);
  // }
//STEP 8
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';

  // let leastFavMovies = ['The Little Mermaid', 'Inherent Vice', 'Twilight'];
  // console.log('Movies I like:');
  // console.log('');
  // for (let i of movies) {
  //   console.log(i);
  // }
  // console.log('');
  // console.log('Movies I regret watching:');
  // console.log('');
  // for (let n of leastFavMovies) {
  //   console.log(n);
  // }
//STEP 9
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';

  // let leastFavMovies = ['The Little Mermaid', 'Inherent Vice', 'Twilight'];

  // let moviesNew = movies.concat(leastFavMovies);
  // console.log(moviesNew.sort().reverse());

//STEP 10
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';

  // let leastFavMovies = ['The Little Mermaid', 'Inherent Vice', 'Twilight'];

  // let moviesNew = movies.concat(leastFavMovies);
  // console.log(moviesNew.sort().reverse());
  // console.log(moviesNew.pop());

//STEP 11
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';

  // let leastFavMovies = ['The Little Mermaid', 'Inherent Vice', 'Twilight'];

  // let moviesNew = movies.concat(leastFavMovies);
  // console.log(moviesNew.sort().reverse());
  // console.log(moviesNew.shift());

//STEP 12
  // let movies = [];
  // movies[0] = 'Inception';
  // movies[1] = 'Get Out';
  // movies[2] = 'Bridesmaids';
  // movies[3] = 'Donnie Darko';
  // movies[4] = 'A Beautiful Mind';
  // movies[5] = 'Scary Movie';
  // movies[6] = 'No One is Going to Save You';

  // let leastFavMovies = ['The Little Mermaid', 'Inherent Vice', 'Twilight'];
  // let moviesNew = movies.concat(leastFavMovies);
  // console.log(moviesNew);
  // console.log(moviesNew.sort().reverse());
  // console.log(moviesNew.indexOf('The Little Mermaid'));
  // console.log(moviesNew.indexOf('Inherent Vice'));
  // console.log(moviesNew.indexOf('Twilight'));

  // moviesNew[1] = 'Parasite';
  // moviesNew[4] = 'THe Dark Knight';
  // moviesNew[0] = 'Seven';

  // console.log(moviesNew);


//STEP 13
  // let movies = [["Get Out", 1], ["Inception", 2], ["No One is Going to Save You", 3], ["Bridesmaids", 4], ["Scary Movie", 5]];

  // movies.forEach(function (movies) {
  //    let movieNames = movies.filter(function(names){
  //    return typeof names !== "number";});
  //    console.log(movieNames);
  // })

//STEP 14
  // let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

  // let showEmployee = function() {
  //     console.log('Employees:');
  //     console.log('');
  //     employees.forEach((employee) => {
  //       console.log(employee.toUpperCase());
  //     })
  // }
  // showEmployee(employees);

//STEP 15
  // function filter_array_values(arr) {
  //   arr = arr.filter(isEligible);
  //   return arr;
  // }
  // function isEligible(value) {
  //   if(value !== false || value !== null || value !== 0 || value !== "") {
  //     return value;
  //   }
  // }
  // console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

//STEP 16

  // function random_item(items)
  // {
  // return items[Math.floor(Math.random()*items.length)];
  // }

  // let items = [2, 45, 63, 149, 77, 76, 100, 8, 82, 272];
  // console.log(random_item(items));

//STEP 17
  // let arr = [2, 45, 63, 500, 77, 76, 100, 8, 82, 272];
  // console.log(Math.max.apply(null, arr));
