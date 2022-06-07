const alltr = document.querySelectorAll('#main .list_view table .trrow');
const addrow = document.querySelector('#main .list_view table tbody');
const s1 = document.querySelector('#main .list_view .paginationDiv select');
const nextPage = document.querySelector('#main .list_view .pagination .next');
const prevPage = document.querySelector('#main .list_view .pagination .prev');
const enabled = document.querySelector('#main .list_view .pagination .prev.disabled');
const pageValue = document.querySelector('#main .list_view .page_target input');
const pageRedirect = document.querySelector('#main .list_view .page_target span');
const paginDiv = document.querySelector('#main .list_view .pagination');
let selectInput = 10, countPage = 0, mulnum = 1, can_rem=0, can_div;

s1.addEventListener('change',()=>
{
    selectInput = s1.options[s1.selectedIndex].value;
    setPagination(selectInput);
    mulnum=1;
    countPage=0;
    nextPage.classList.remove('disabled');
    prevPage.classList.add('disabled');
    sliceData(mulnum);
    let refDiv= document.querySelectorAll('#main .list_view .pagination .can_remove');
    if(refDiv.length===1)
    {
        nextPage.classList.add('disabled');
        prevPage.classList.add('disabled');
    }
})

function defaultShow()
{
    let slicePart = Array.from(alltr).slice(0,selectInput);
    alltr.forEach((EachChild)=>
    {
        EachChild.remove();
    })
    slicePart.map(data=>
    {
        addrow.appendChild(data);
    })
}
defaultShow();

function defaultPagination()
{
    let targetLength = alltr.length;
    let loopLength = Math.ceil(targetLength/10);
    let pageNum = [];
    for(let i=0; i<loopLength; i++)
    {
      let num = Math.ceil(targetLength/10);
      pageNum.push(num);
      targetLength=targetLength-10;
    }
    createPageNumber(pageNum);    
}
defaultPagination()

function setPagination(selectInput)
{
    let targetLength = alltr.length;
    let loopLength = Math.ceil(targetLength/selectInput);
    let pageNum = [];
    for(let i=0; i<loopLength; i++)
    {
      let num = Math.ceil(targetLength/selectInput);
      pageNum.push(num);
      targetLength=targetLength-selectInput;
    }
    if(can_rem!=0)
    {
        can_div.forEach((remNode)=>
        {
            remNode.remove();
        })
    }
    createPageNumber(pageNum);
}

function createPageNumber(pageNum)
{
    pageNum.map(num=>
    {
        let button = document.createElement('button');
        button.setAttribute('class','page_num can_remove');
        button.innerText=num;
        prevPage.insertAdjacentElement('afterend', button);     
    })
    can_div= document.querySelectorAll('#main .list_view .pagination .can_remove');
    can_div[0].classList.add('active');
    can_rem=can_div.length;
    can_div.forEach(navigatePage=>
    {
        navigatePage.addEventListener('click',(e)=>
        {
            mulnum = +e.target.innerText;
            switch(true)
            {
                case (mulnum < can_div.length && mulnum>1) :
                {
                    nextPage.classList.remove('disabled');
                    prevPage.classList.remove('disabled');
                    break;
                }
                case (mulnum < can_div.length && mulnum>=1) :
                {
                    nextPage.classList.remove('disabled');
                    prevPage.classList.add('disabled');
                    break;
                }
                case (mulnum == can_div.length) :
                {
                    nextPage.classList.add('disabled');
                    prevPage.classList.remove('disabled');
                    break;
                }    
            }
            e.target.closest('.pagination').querySelector('.page_num.active').classList.remove('active');
            e.target.classList.add('active');
            countPage=mulnum -1;
            sliceData(mulnum);
        })
    })
}

nextPage.addEventListener('click',(e)=>
{   
    let refDiv= document.querySelectorAll('#main .list_view .pagination .can_remove');
    if(enabled.classList.contains('disabled'))
    {
        enabled.classList.remove('disabled');
    }
    countPage++;
    if(countPage < refDiv.length)
    {
        let lastPage = refDiv.length -1;
        if(countPage==lastPage)
        {
          e.target.closest('.nav_btn').classList.add('disabled');
        }
        mulnum++;
        sliceData(mulnum);
        e.target.closest('.pagination').querySelector('.page_num.active').nextElementSibling.classList.add('active');
        e.target.closest('.pagination').querySelector('.page_num.active').classList.remove('active');
    }
    else
    {
        countPage--;
        e.target.closest('.nav_btn').classList.add('disabled');
        return;
    }
})

prevPage.addEventListener('click',(e)=>
{   
    let refDiv= document.querySelectorAll('#main .list_view .pagination .can_remove');
    if(nextPage.classList.contains('disabled'))
    {
        nextPage.classList.remove('disabled');
    }
    countPage--;
    if(countPage < refDiv.length && countPage>=0)
    {
        if(countPage==0)
        {
          e.target.closest('.nav_btn').classList.add('disabled');
        }
        mulnum--;
        sliceData(mulnum);
        let finalActive = e.target.closest('.pagination').querySelector('.page_num.active').previousElementSibling;
        for(let i=0; i<refDiv.length; i++)
        {
            refDiv[i].classList.remove('active');
        }
        finalActive.classList.add('active');
    }
    else if(countPage<0)
    {
        countPage++;
        e.target.closest('.nav_btn').classList.add('disabled');
        return;
    }
})

pageValue.addEventListener('input',(e)=>
{
  targetNum = +e.target.value;
  pageRedirect.addEventListener('click',(e)=>
  {
    e.stopImmediatePropagation();
     let can_div = e.target.closest('.row').querySelectorAll('.pagination .can_remove');
     if(targetNum<=can_div.length)
     {
       sliceData(targetNum);
     }
     else
     {
       alert('Please provide valid page number');
       return false;
     }
  })
})

function sliceData(mulnum)
{
    let targetValue = selectInput * mulnum;
    let initialValue = targetValue - selectInput;
    let slicePart = Array.from(alltr).slice(initialValue,targetValue);
    alltr.forEach((EachChild)=>
    {
        EachChild.remove();
    })
    slicePart.map(data=>
    {
        addrow.appendChild(data);
    })
}
     