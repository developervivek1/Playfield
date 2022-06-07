const openContainer = document.querySelectorAll('.tab-content .select-box .selected');
const tabBtn = document.querySelectorAll('.playfield_overview .btnDiv p');
const select = document.querySelectorAll('.tab-content .search-box input');
const optContainer = document.querySelectorAll('.tab-content .select-box .options-container');
const listOverlay = document.querySelector('#main .listOverlay');
const allSelectedbox = document.querySelectorAll('.tab-content .select-box .selected');
const openExport = document.querySelector('.playfield_overview .right_div .export > button');
const openSearch2 = document.querySelector('.playfield_overview .right_div .search img');
const alrShowExport = document.querySelector('.playfield_overview .right_div .export .showExport');
const optionLabel = document.querySelectorAll('.tab-content .inside_option .option label');
const optionInput = document.querySelectorAll('.tab-content .inside_option .option input');
const checkAll = document.querySelector('.playfield_overview .tab-content .list_view #allTick');
const sortValue = document.querySelectorAll('.playfield_overview .tab-content .list_view .thead td p');
const openFilter = document.querySelectorAll('.playfield_overview .tab-content .list_view .thead td img');
const filterdrop = document.querySelectorAll('.playfield_overview .tab-content .list_view .thead td .mydropdown');
const filterVal1 = document.querySelectorAll('.playfield_overview .list_view table td #filter1 ul li input');
const filterVal2 = document.querySelectorAll('.playfield_overview .list_view table td #filter2 ul li input');
let sportArray = [], stateArray = [], distArray = [], boxCon, dir = 'desc', ownertext = [], sporttext = [];

// working dropdown
optionLabel.forEach((option)=>
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
    if(checkbox.checked===true)
    {
      checkbox.checked = false;
      poppingValues(boxCon,mainoption,selectBox,mergeCon,e);
    }
    else if(checkbox.checked===false)
    {
      checkbox.checked = true;
      pushingValues(boxCon,mainoption,selectBox,mergeCon,e);      
    }
  })
})

optionInput.forEach((option)=>
{
  option.addEventListener('click',(e)=>
  {
    console.log('hello');
    let mergeCon = '';
    let selectBox = e.target.closest('.select-box').querySelector('.selected p');
    let selectBoxNone = e.target.closest('.select-box').querySelector('.selected .d-none');
    boxCon = selectBoxNone.innerText;
    let mainoption = e.target.closest('.mainoption');
    let checkbox = mainoption.querySelector('input');
    if(checkbox.checked)
    {
      pushingValues(boxCon,mainoption,selectBox,mergeCon,e);
    }
    else
    {
      poppingValues(boxCon,mainoption,selectBox,mergeCon,e);   
    }
  })
})

function pushingValues(boxCon,mainoption,selectBox,mergeCon,e)
{
  let optionVal = mainoption.querySelector('label').innerText;
  if(optionVal !== 'All')
  {
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
        case (boxCon === 'District'):
        {
          distArray.push(optionVal);
          loopArrayValues(distArray,selectBox,mergeCon);
          break;
        }
    }
  }
  else
  {
    let alloptVal = e.target.closest('.options-container').querySelectorAll('.option label');
    let allCheckbox = e.target.closest('.options-container').querySelectorAll('.option input');
    switch(true)
    {
        case (boxCon === 'Select Sport'):
        {
          sportArray=[];
          markAllText(sportArray,selectBox,alloptVal,allCheckbox);
          break;
        }
        case (boxCon === 'Select State'):
        {
          stateArray=[];
          markAllText(stateArray,selectBox,alloptVal,allCheckbox);
          break; 
        }
        case (boxCon === 'District'):
        {
          distArray=[];
          markAllText(distArray,selectBox,alloptVal,allCheckbox);
          break; 
        }
    }
  }
}

function poppingValues(boxCon,mainoption,selectBox,mergeCon,e)
{
  let optionVal = mainoption.querySelector('label').innerText;
  if(optionVal !== 'All')
  {
    let allCheckbox = e.target.closest('.options-container').querySelectorAll('.option input');
    switch(true)
    {
      case (boxCon === 'Select Sport'):
      {
        checkfirstCheckbox(allCheckbox,sportArray);
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
        checkfirstCheckbox(allCheckbox,stateArray);
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
      case (boxCon === 'District'):
      {
        checkfirstCheckbox(allCheckbox,distArray);
        let check = distArray.includes(optionVal);
        if(check)
        {
          let index = distArray.indexOf(optionVal);
          distArray.splice(index, 1);
          if(distArray.length===0)
          {
            selectBox.innerText='District';
          }
        }
        loopArrayValues(distArray,selectBox,mergeCon);
        break;
      }
    } 
  }
  else
  {
    let allCheckbox = e.target.closest('.options-container').querySelectorAll('.option input');
    switch(true)
    {
        case (boxCon === 'Select Sport'):
        {
          sportArray=[];
          unmarkAllText(allCheckbox);
          selectBox.innerText='Select Sport';
          break;
        }
        case (boxCon === 'Select State'):
        {
          stateArray=[];
          unmarkAllText(allCheckbox);
          selectBox.innerText='Select State';
          break; 
        }
        case (boxCon === 'District'):
        {
          distArray=[];
          unmarkAllText(allCheckbox);
          selectBox.innerText='District';
          break; 
        }
    }
  }
}

function loopArrayValues(Array,selectBox,mergeCon)
{
  for(let i=0; i<Array.length; i++)
  {
    mergeCon+=`${Array[i]} `;
    selectBox.innerText=`${mergeCon}`;
  }
}

function checkfirstCheckbox(allcheckbox,Array)
{
   if(allcheckbox[0].checked)
   {
     allcheckbox[0].checked=false;
     Array.splice(0,1);
   }
}

function markAllText(Array,selectBox,alloptVal,allCheckbox)
{
  alloptVal.forEach(all => {
    let label = all.innerText;
    Array.push(label);
  });
  allCheckbox.forEach(check => {
    check.checked = true;
  });
  selectBox.innerText="All";
}

function unmarkAllText(allCheckbox)
{
  allCheckbox.forEach(check => {
    check.checked = false;
  });
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

//making all checkbox tick
checkAll.addEventListener('click',(e)=>
{
  let allcheckbox = e.target.closest('tbody').querySelectorAll('tr input[type="checkbox"]');
  for(let i=1; i<allcheckbox.length; i++)
  {
    if(allcheckbox[i].checked===false)
    {
      allcheckbox[i].checked=true;
    }
    else
    {
      allcheckbox[i].checked=false;
    }
  }
})

// opening search container
openSearch2.addEventListener('click',(e)=>
{
  let showSearch = e.target.closest('.search').querySelector('input');
  if(!showSearch.classList.contains('active'))
  {
    showSearch.classList.add('active');
  }
  else
  {
    showSearch.classList.remove('active');
  }
})

openExport.addEventListener('click',(e)=>
{
  let showExp = e.target.closest('.export').querySelector('.showExport');
  if(!showExp.classList.contains('active'))
  {
    listOverlay.classList.add('active');
    openExport.classList.add('active');
    showExp.classList.add('active');
  }
  else
  {
    listOverlay.classList.remove('active');
    openExport.classList.remove('active');
    showExp.classList.remove('active');
  }
})

//disable all while click on window
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

  allSelectedbox.forEach((allBox)=>
  {
    if(allBox.classList.contains('active'))
    {
      allBox.classList.remove('active');
    }
  })

  if(alrShowExport.classList.contains('active'))
  {
    listOverlay.classList.remove('active');
    openExport.classList.remove('active');
    alrShowExport.classList.remove('active');
  }

  filterdrop.forEach((filter)=>
  {
    if(filter.classList.contains('active'))
    {
      listOverlay.classList.remove('active');
      filter.classList.remove('active');
    }
  })
}

tabBtn.forEach((tab)=>
{
  tab.addEventListener('click',(e)=>
  {
    let btn = e.target;
    if(!btn.classList.contains('active'))
    {
      let activeBtn = e.target.closest('.btnDiv').querySelector('.tab-btn.active');
      activeBtn.classList.remove('active');
      btn.classList.add('active');
      let target = e.target.getAttribute('data-target');
      let activeData = e.target.closest('.row').querySelector('.tab-content .tabCon.active');
      let targetData = e.target.closest('.row').querySelector(target);
      activeData.classList.remove('active');
      targetData.classList.add('active');
    }
  })
})

// sorting table
sortValue.forEach((sort,ind)=>
{
  sort.addEventListener('click',()=>
  {
    if(dir==='desc')
    {
      dir = 'asc';
    }
    else if(dir==='asc'){
      dir = 'desc';
    }
    let tdindex = ind;
    let i, x, y,switching = true;
    let table = document.querySelector('#adtable');
    while (switching) {
      switching = false;
      let trrow = table.querySelectorAll(`.trrow`);
      for (i = 0; i < trrow.length-1; i++) 
      {
        let td = trrow[i].querySelectorAll('td')[tdindex];
        let nexttd = trrow[i+1].querySelectorAll('td')[tdindex];
        x = td.querySelector('p');
        y = nexttd.querySelector('p');
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && dir==='asc') 
        {
          trrow[i].parentNode.insertBefore(trrow[i + 1], trrow[i]);
          switching = true;
        }
        else if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && dir==='desc')
        {
          trrow[i].parentNode.insertBefore(trrow[i + 1], trrow[i]);
          switching = true;
        }
      }
    }
  })
})

// filter table
openFilter.forEach(element => {
  element.addEventListener('click',(e)=>
  {
    let dropdown = e.target.closest('td').querySelector('.mydropdown');
    if(!dropdown.classList.contains('active'))
    {
      dropdown.classList.add('active');
      listOverlay.classList.add('active');
    }
    else
    {
      dropdown.classList.remove('active');
      listOverlay.classList.remove('active');
    }
  })
});

filterVal1.forEach(element => {
  element.addEventListener('click',(e)=>
  {
    let text = e.target.closest('li').querySelector('label').innerText;
    text = text.toLowerCase();
    let allp = e.target.closest('tbody').querySelectorAll('.trrow td:nth-child(4) p');
    let allTickbox = e.target.closest('ul').querySelectorAll('input');
    let inputcheck = e.target.closest('li').querySelector('input');
    if(inputcheck.checked && text!=="all")
    {
      pushInFilter(allp,ownertext,text);
      filterValue(allp,ownertext);
    }
    else if(!inputcheck.checked)
    {
      allTickbox[0].checked=false;
      popInFilter(allp,ownertext,text);
      filterValue(allp,ownertext);
    }
    if(text==="all")
    {
      ownertext = [];
      let allrow = e.target.closest('tbody').querySelectorAll('.trrow');
      let allLabel = e.target.closest('ul').querySelectorAll('label');
      let checkTick = e.target.closest('li').querySelector('input');
      allLabel.forEach(label => {
        let labeltext = label.innerText.toLowerCase();
        ownertext.push(labeltext);
      });
      showAlltr(allrow,allTickbox,checkTick,ownertext);
    }
  })
});

filterVal2.forEach(element => {
  element.addEventListener('click',(e)=>
  {
    console.log('hello');
    let text = e.target.closest('li').querySelector('label').innerText;
    text = text.toLowerCase();
    let allp = e.target.closest('tbody').querySelectorAll('.trrow td:nth-child(5) p');
    let allTickbox = e.target.closest('ul').querySelectorAll('input');
    let inputcheck = e.target.closest('li').querySelector('input');
    if(inputcheck.checked && text!=="all")
    {
      pushInFilter(allp,sporttext,text);
      filterValue(allp,sporttext);
    }
    else if(!inputcheck.checked)
    {
      allTickbox[0].checked=false;
      popInFilter(allp,sporttext,text);
      filterValue(allp,sporttext,text);
    }
    if(text==="all")
    {
      sporttext = [];
      let allrow = e.target.closest('tbody').querySelectorAll('.trrow');
      let allLabel = e.target.closest('ul').querySelectorAll('label');
      let checkTick = e.target.closest('li').querySelector('input');
      allLabel.forEach(label => {
        let labeltext = label.innerText.toLowerCase();
        sporttext.push(labeltext);
      });
      showAlltr(allrow,allTickbox,checkTick,sporttext);
    }
  })
});

function pushInFilter(allp,textArray,text)
{
  let filterValue = Array.from(allp).filter((ele)=>
  {
    let eletext = ele.innerText.toLowerCase();
    return eletext.match(text)
  })
  filterValue.forEach((ele)=>
  {
    let eletext = ele.innerText.toLowerCase();
    if(!textArray.includes(eletext))
    {
      textArray.push(eletext);
    }
  })
}

function popInFilter(allp,textArray,text)
{
  let filterValue = Array.from(allp).filter((ele)=>
  {
    let eletext = ele.innerText.toLowerCase();
    return eletext.match(text)
  })
  filterValue.forEach((ele)=>
  {
    let eletext = ele.innerText.toLowerCase();
    if(textArray.includes(eletext))
    {
      let popind = textArray.indexOf(eletext);
      textArray.splice(popind, 1);
    }
  })
}

function filterValue(allp,textarray)
{
  Array.from(allp).forEach(all => {
    let label = all.innerText.toLowerCase();
    if(textarray.includes(label))
    {
      all.closest('.trrow').style.display='';  
    }
    else
    {
      all.closest('.trrow').style.display='none';
    }
  });
}


function showAlltr(allrow,allTickbox,checkTick,Array)
{
  if(checkTick.checked)
  {
    allrow.forEach((tr)=>
    {
      tr.style.display="";
    })
    allTickbox.forEach((tick)=>
    {
      tick.checked=true;
    })
  }
  else
  {
    Array = [];
    allrow.forEach((tr)=>
    {
      tr.style.display="none";
    })
    allTickbox.forEach((tick)=>
    {
      tick.checked=false;
    })
  }
}