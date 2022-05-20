const openContainer = document.querySelectorAll('#main .select-box .selected');
const optContainer = document.querySelectorAll('#main .options-container');
const optionAll = document.querySelectorAll('#main .select-box .option');
const allSelectedbox = document.querySelectorAll('#main .select-box .selected');
const select = document.querySelectorAll('#main .search-box input');
const listOverlay = document.querySelector('#main .listOverlay');
let sportArray = [], stateArray = [], boxCon; 

// working dropdown
optionAll.forEach((option)=>
{
  option.addEventListener('click',(e)=>
  {
    e.preventDefault();
    let mergeCon = '';
    let selectBox = e.target.closest('.select-box').querySelector('.selected p');
    let selectBoxNone = e.target.closest('.select-box').querySelector('.selected .d-none');
    boxCon = selectBoxNone.innerText;
    let mainoption = e.target.closest('.mainoption');
    let checkbox = mainoption.querySelector('input');
    if(checkbox.checked==true)
    {
      checkbox.checked = false;
      let optionVal = mainoption.querySelector('label').innerText;
      switch(true)
      {
        case (boxCon === 'Select Sport'):
        {
          let check = sportArray.includes(optionVal);
          if(check)
          {
            let index = sportArray.indexOf(optionVal);
            sportArray.splice(index, 1);
            if(sportArray.length===0)
            {
              selectBox.innerText='Select Sport';
            }
          }
          loopArrayValues(sportArray,selectBox,mergeCon);
          break;
        }
        case (boxCon === 'Select State'):
        {
          let check = stateArray.includes(optionVal);
          if(check)
          {
            let index = stateArray.indexOf(optionVal);
            stateArray.splice(index, 1);
            if(stateArray.length===0)
            {
              selectBox.innerText='Select State';
            }
          }
          loopArrayValues(stateArray,selectBox,mergeCon);
          break;
        }
      } 
    }
    else if(checkbox.checked==false)
    {
      checkbox.checked = true;
      let optionVal = mainoption.querySelector('label').innerText;
      switch(true)
      {
          case (boxCon === 'Select Sport'):
          {
            sportArray.push(optionVal);
            loopArrayValues(sportArray,selectBox,mergeCon);
            break;
          }
          case (boxCon === 'Select State'):
          {
            stateArray.push(optionVal);
            loopArrayValues(stateArray,selectBox,mergeCon);
            break; 
          }
      }      
    }
  })
})

function loopArrayValues(Array,selectBox,mergeCon)
{
  for(let i=0; i<Array.length; i++)
  {
    mergeCon+=`${Array[i]} `;
    selectBox.innerText=`${mergeCon}`;
  }
}

openContainer.forEach((open)=>
{
  open.addEventListener('click',(e)=>
  {
     let optionCon = e.target.closest('.select-box').querySelector('.options-container');
     let selectBox = e.target.closest('.select-box').querySelector('.selected');
     if(!optionCon.classList.contains('active'))
     {
       listOverlay.classList.add('active');
       selectBox.classList.add('active');
       optionCon.classList.add('active');
     }
     else
     {
       listOverlay.classList.remove('active');
       selectBox.classList.remove('active');
       optionCon.classList.remove('active');
     }
  })
})

// Search Values
select.forEach((select)=>
{
  select.addEventListener('input',(e)=>
  {    
    let value = e.target.value;
    value = value.toLowerCase();
    let allopt = e.target.closest('.options-container').querySelectorAll('.option label');

    allopt.forEach((opt)=>
    {
      if(opt.innerText.toLowerCase().includes(value))
      {
        let option = opt.closest('.mainoption');
        option.style.display="block";
      }
      else
      {
        let option = opt.closest('.mainoption');
        option.style.display="none";
      }
    })
  })
})

//disable dropdown on window click

const eventList = ['keyup', 'click'];
eventList.forEach(function(e) {
  window.addEventListener(e, checkType);
});

function checkType(e)
{
  if(e.type==="keyup")
  {
    if(e.key === 'Escape')
    {
      disableAll();
    }
  }
  if(e.type==="click" && e.target===listOverlay)
  {
    if(listOverlay.classList.contains('active'))
    {
      disableAll();
    }
  }
}

function disableAll()
{
  optContainer.forEach((container)=>
  {
    if(container.classList.contains('active'))
    {
      listOverlay.classList.remove('active');
      container.classList.remove('active');
    }
  })

  openContainer.forEach((allBox)=>
  {
    if(allBox.classList.contains('active'))
    {
      allBox.classList.remove('active');
    }
  })
}