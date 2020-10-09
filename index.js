function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0) {
     var mostrar = katzDeliLine[0];
     katzDeliLine.shift();
     return `Currently serving ${mostrar}.`;
  }else {
     return "There is nobody waiting to be served!";
  }
}
