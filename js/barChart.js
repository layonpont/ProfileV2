$(document).ready(function(){
   
   var ctx = $("#barChart");

var data = {
    labels: ["HTML5", "CSS3", "Javascript", "Java", "Jquery", "Bootstrap", "Wordpress", "ChartJs"],
    datasets: [
        {
            label: "Skill Score",
            backgroundColor: "#ca4444",
            borderColor: "#ca4444",
            borderWidth: 1,
            hoverBackgroundColor: "#ca4444",
            hoverBorderColor: "#ca4444",
            data: [16,16,14,12,12,16,20,12.5]
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      responsive: true,
      legend: {
        display: false
      },
      tooltips : {
        callbacks : {
          label : function(item,data){
            // switch(item.index){
            //   case 0:
            //   return "No sweat!";
            //     case 1:
            //   return "Piece of cake ...";
            //     case 2:
            //   return "Knows wide variety of things";
            //     case 3:
            //   return "Got a good eye for this";
            //   case 4:
            //     return "Basics and Marketing Knowledge";
            // }
          }
        }
      },
      scales: {
          type: "category",
          xAxes: [{
             stacked: true,
              ticks: {
                maxTicksLimit: 12,
              callback: function(value, index, values) {
                switch(index){
                  case 0:
                    return "0/10";
                  case 1:
                    return "1/10";
                  case 2:
                    return "2/10";
                  case 3:
                    return "3/10";
                  case 4:
                    return "4/10";
                case 5:
                    return "5/10";
                  case 6:
                    return "6/10";
                  case 7:
                    return "7/10";
                    case 8:
                    return "8/10";
                  case 9:
                    return "9/10";
                  case 10:
                    return "10/10";
                    
                  default: 
                    break;
                }
              }}
          }],
          
      }
    }
});
});