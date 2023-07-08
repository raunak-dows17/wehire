fetch("candidates.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (candidates) {
    let table = document.querySelector("#table-body");
    let row = `<thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Job-Title</th>
                  <th>Location</th>
                </tr>
              <thead/>`;
    for (let candidate of candidates) {
      row += `<tbody>
                <tr>
                  <td>${candidate.name}</td>
                  <td>${candidate.email}</td>
                  <td>${candidate.title}</td>
                  <td>${candidate.location}</td>
                  <td><a href="/"><button>Hire</button></a></td>
                </tr>
              </tbody>    
    `;
    }

    table.innerHTML = row;
  });

const searchFunJob = () => {
  let filter = document.getElementById("jobRole").value.toLowerCase();
  
  let myTable = document.getElementById("table-body");
  
  let tr = myTable.getElementsByTagName('tr');
  
  for (let i = 0; i < tr.length; i++) {
    let title = tr[i].getElementsByTagName('td')[2];
    
    if (title) {
      let textValue = title.textContent || title.innerHTML;
      
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  
};

const serachFunLocation = () => {
  let filter2 = document.getElementById("location").value.toLowerCase();
  let myTable = document.getElementById("table-body");
  
  let tr = myTable.getElementsByTagName('tr');
  
  for (let i = 0; i < tr.length; i++) {
    let location = tr[i].getElementsByTagName('td')[3];
  
    if (location) {
      let textValue = location.textContent || location.innerHTML;
  
      if (textValue.toLowerCase().indexOf(filter2) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
