var character_level;

//名前を、ストレージに保存
$("#name_save").on("click", function(){
    var value = $("#name_textarea").val();
    localStorage.setItem("name", value)
    var goal = $("#goal_textarea").val();
    localStorage.setItem('goal', goal)
    var profile = $("#profile_textarea").val();
    localStorage.setItem('profile', profile)

    alert("目標が確定しました");
    });


//”name"に値が記入された際に、テキストエリアに表示
if(localStorage.getItem("name")){
    var value = localStorage.getItem("name");
    $("#name_textarea").val(value);  
    var goal = localStorage.getItem("goal");
    $("#goal_textarea").val(goal);  
    var profile = localStorage.getItem("profile");
    $("#profile_textarea").val(profile);  


}else{
    alert("名前と目標を入力してください");
};

