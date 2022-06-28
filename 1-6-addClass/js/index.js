const $entryType = $('#EntryType');
const $tab1 = $('#Tab1');
const $tab2 = $('#Tab2');
const $tab3 = $('#Tab3');


// 初始化自動套用 class: Type1
$entryType.addClass('Type1');

// 事件
$tab1.click(function(){
    //alert(111)
    //console.log(111);
    $entryType
    .removeClass()
    .addClass('entry-out Type1');
});

$tab2.click(function(){
    $entryType
    .removeClass()
    .addClass('entry-out Type2');
});

$tab3.click(function(){
    $entryType
    .removeClass()
    .addClass('entry-out Type3');
});