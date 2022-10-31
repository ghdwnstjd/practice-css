new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [0,5,10,15,20,25,30,35,40,50],
      datasets: [{ 
          data: [2,3,4,2,3,7,25,14,48,19],
          label: "가입",
          borderColor: ["#3e95cd", "#8e5ea2"],
          fill: true
        }, { 
          data: [0,0,1,2,1,3,4,10,15,6],
          label: "탈퇴",
          fill: true
        }
      ]
    }
  });


  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["10/1","10/2","10/3","10/4","10/5","10/6","10/7","10/8","10/9","10/10"],
      datasets: [{ 
          data: [2,3,4,2,3,7,25,14,48,19],
          label: "비회원",
          backgroundColor: "#3e95cd",
          fill: true
        }, { 
          data: [0,0,1,2,1,3,4,10,15,6],
          label: "회원",
          backgroundColor: "#8e5ea2",
          fill: true
        }
      ]
    }
  });