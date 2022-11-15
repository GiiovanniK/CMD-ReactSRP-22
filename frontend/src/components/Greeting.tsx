const Greeting = () => {
  var myDate = new Date();
  var hours = myDate.getHours();
  var greet;

  if (hours < 12) greet = "Goedemorgen";
  else if (hours >= 12 && hours <= 17) greet = "Goedemiddag";
  else if (hours >= 17 && hours <= 24) greet = "Goedenavond";

  return <h1>{greet},</h1>;
};

export default Greeting;