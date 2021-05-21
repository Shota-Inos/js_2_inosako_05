
//deploy数を、localstorageの数で表示
const htmlDeploy =`
    <tr>
        <th>${localStorage.length}<th>
    <tr>
`

$("#home_deploy").append(htmlDeploy);


//nameに名前を表示する
if(localStorage.getItem("name")){  
    const name = localStorage.getItem("name");
  
    const htmlName =`
    <tr>
        <td>${name}<td>
    <tr>
    `

    $("#profile_name").append(htmlName);
}



//目標を表示する
if(localStorage.getItem("goal")){  
    const goal = localStorage.getItem("goal");
  
    const htmlGoal =`
    <tr>
        <td>${goal}<td>
    <tr>
    `

    $("#profile_goal").append(htmlGoal);
}

//プロフィールを表示する
if(localStorage.getItem("profile")){  
    const profile = localStorage.getItem("profile");
  
    const htmlProfile =`
    ${profile}
    `

    $("#profile_profile").append(htmlProfile);
}

//モーダルウィンドウ
//クリックすることで、ウィンドウを開く
$("#diploy_btn").on("click",function(){ 
    $('.modal').show();
});

//クリックすることで、ウィンドウを閉じる
$("#save_diary").on("click",function(){ 
    $('.modal').fadeOut();
});

//クリックすることで、ウィンドウを閉じる
$("#save_memo").on("click",function(){ 
    $('.modal').fadeOut();
    
});//クリックすることで、ウィンドウを閉じる
$("#save_fyi").on("click",function(){ 
    $('.modal').fadeOut();
});

//モーダルウィンドウ以外をクリックすることで、ウィンドウを閉じる
$("#modal_clear_btn").on("click",function(){ 
    $('.modal').fadeOut();
});



//1.Save クリックイベント
$("#save_diary").on("click",function(){
    const key = $("#key").val();
    const value = $("#memo").val();
    localStorage.setItem(key,value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list_diary").append(html);
});

$("#save_memo").on("click",function(){
    const key = $("#key").val();
    const value = $("#memo").val();
    localStorage.setItem(key,value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list_memo").append(html);
});

$("#save_fyi").on("click",function(){
    const key = $("#key").val();
    const value = $("#memo").val();
    localStorage.setItem(key,value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list_fyi").append(html);
});

//2.clear クリックイベント
$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
});

//3.ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list_diary").append(html);
    $("#list_memo").append(html);
    $("#list_fyi").append(html);
}

//Deploy一覧を表示

$("#deploy_find_btn").on("click",function(){
    for(let i=0; i<localStorage.getItem; i++){
        const key   = localStorage.key(i);
        const value = localStorage.getItem(key);
        const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
        $("#right_list_deploy").append(htmlDeploy);
    }

});
