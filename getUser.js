async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    //console.log(data);
    let listItem = "";
    data.forEach(addToList);

    function addToList(user) {
      listItem += '<li class="list-group-item list-group-item-info >' + user.name + '</li >' + "<br>" 
               + '<p>' + user.email + '</p>' + "<br>"
               + '<p>' + user.website + '</p>' + "<br>";
    }
    document.getElementById("userList").innerHTML = listItem;
}

fetchUsers();
