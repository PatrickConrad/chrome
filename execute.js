// const mousePosition = [0, 0, 0, 0];

// const setMousePosition = e => {
//   // console.log(e);
// }

const getElementRect = (element) => {
  return element.getBoundingClientRect()
}

const elementsByPosition = []
const getChildren = (element, childPos, colorIndex) => {
  if(!element.childNodes || element.childNodes.length == undefined || element.childNodes.length == null || element.childNodes.length <1){
    elementsByPosition.push([12, childPos, 'none'])
    return;
  }
  const rect = getElementRect(element);
  console.log(rect);

  elementsByPosition.push([colorIndex, childPos, rect])
  const childArray = Object.values(element.childNodes);
  console.log(childArray)
  for(let i = 0; i <= childArray.length; i++){
    const next = element.querySelector(`:nth-child(${i+1})`)
    console.log(next);
    getChildren(next, [...childPos, i], colorIndex+1)
  }
  return;
}


(function() {
  const body = document.querySelector('body');
  // body.addEventListener('onMouseMove', (e)=> setMousePosition(e));
  // console.log(body);
  getChildren(body, [0], 0)
})()

