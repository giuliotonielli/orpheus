// m@a, ma

const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset()
        document.getElementById('fname').focus();
        alert("You have signed up successfully! \n Log in to access your account")   
    }
    else{
        alert(localStorage.getItem("lname") ); 
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    
    if(!exist){
        alert("Incorrect login credentials"); 
    }
    else{
        location.href = "account.html";   
    }
    e.preventDefault();
} 


function changeData() {
  //JSON.stringify(JSON.parse(localStorage.getItem('formData')) || []).remove(2);
  
  data = (JSON.parse(localStorage.getItem('formData')) || [])[0]
  //alert(JSON.stringify(JSON.parse(localStorage.getItem('formData')) || []))
  document.getElementById("name_btn").innerHTML = JSON.stringify(data.fname).slice(1,-1) + " " 
  + JSON.stringify(data.lname).slice(1,-1); 
}


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        alfa = 100000
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Portfolio Value', 'Interessante fare grafico diviso per stocks, bonds, cash e case'],
          ['2013',  125000,      96000],
          ['2014',  132000,      116000],
          ['2015',  117600,       83900],
          ['2016',  149000,      110000]
        ]);

        var options = {
          title: 'Portfolio Value',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: alfa},
          backgroundColor: '#131313',
          width: 600
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }