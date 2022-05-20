const thumbImg = document.querySelectorAll('.playDetail_overview .thumbnail_div .thumb-img img');
const tab_btn = document.querySelectorAll('.playDetail_overview .tabs_pills .btnDiv .tab-btn');

thumbImg.forEach((thumb)=>
{
  thumb.addEventListener('click',(e)=>
  {
    let img = e.target.closest('.slide_main').querySelector('.slide_div img');
    let target = e.target;
    let targetsrc = target.src;
    if(img.classList.contains('active'))
    {
      img.classList.remove('active');
      setTimeout(() => {
        img.classList.add('active');
        img.src = targetsrc;
      }, 20);
    }
  })
})

tab_btn.forEach((tab)=>
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
      let activeData = e.target.closest('.tabs_pills').querySelector('.tab-content .tabCon.active');
      let targetData = e.target.closest('.tabs_pills').querySelector(target);
      activeData.classList.remove('active');
      targetData.classList.add('active');
    }
  })
})