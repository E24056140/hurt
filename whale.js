var t1=0;
var t2=-0.5;
var x=0;
var y=0;
var angle=0;
setInterval(function(){
  t1+=0.01;
  x=35*Math.cos(t1);
  y=35*Math.sin(t1);
  angle=-(t1-(Math.PI/2))
  $("#whale1").css("right",((x-70)*(($(window).width())/100)));
  $("#whale1").css("top",((y-10)*(($(window).width())/100)));
  $("#whale1").css("transform","rotate("+angle+"rad)");
 },35);
setInterval(function(){
  t2-=0.01;
  x=30*Math.cos(t2);
  y=30*Math.sin(t2);
  angle=-(t2+(Math.PI/2))
  $("#whale2").css("right",((x+50)*(($(window).width())/100)));
  $("#whale2").css("top",((y+10)*(($(window).width())/100)));
  $("#whale2").css("transform","rotate("+angle+"rad)");
 },30);
 var cutup =0;
 var cutdw =0;
 var cutlf =0;
 var cutrg =0;
 document.getElementById("front").style.clip = "rect("+cutup+"vw "+cutrg+"vw "+cutdw+"vw "+cutlf+"vw)";//把front切掉
	
 var cutbup =0;
 var cutbdw =0;
 var cutblf =0;
 var cutbrg =0;
 var mousex = 0;
 var mousey = 0;
 var swidth = document.documentElement.clientWidth;
 document.getElementById("back").style.clip = "rect("+cutbup+"vw "+cutbrg+"vw "+cutbdw+"vw "+cutblf+"vw)";//把front切掉
	
window.addEventListener('mousemove', function (e) {
    mousex = e.x;
    mousey = e.y;
	swidth = document.documentElement.clientWidth;
	//alert(mousex+","+mousey+","+swidth)
});

function mouseover(a,b,c,d,word){
	 cutup =a;
	 cutdw =b;
	 cutlf =c;
	 cutrg =d;
	 document.getElementById("name").style.top= (17+a/1.1)+"vw";
	 document.getElementById("name").innerHTML = word;
	 document.getElementById("front").style.clip = "rect("+cutup+"vw "+cutrg+"vw "+cutdw+"vw "+cutlf+"vw)";//把front切掉
}
function mouseleave(){
	 cutup =0;
	 cutdw =0;
	 cutlf =0;
	 cutrg =0;
	 document.getElementById("front").style.clip = "rect("+cutup+"vw "+cutrg+"vw "+cutdw+"vw "+cutlf+"vw)";//把front切掉
	 document.getElementById("name").innerHTML ="";
}
function bmouseover(a,b,c,d,word){
	 cutbup =a;
	 cutbdw =b;
	 cutblf =c;
	 cutbrg =d;
	 document.getElementById("nameb").style.top= (17+a/1.1)+"vw";
	 document.getElementById("nameb").innerHTML = word;
	 document.getElementById("back").style.clip = "rect("+cutbup+"vw "+cutbrg+"vw "+cutbdw+"vw "+cutblf+"vw)";//把back切掉
}
function bmouseleave(){
	 cutbup =0;
	 cutbdw =0;
	 cutblf =0;
	 cutbrg =0;
	 document.getElementById("back").style.clip = "rect("+cutbup+"vw "+cutbrg+"vw "+cutbdw+"vw "+cutblf+"vw)";//把back切掉
	 document.getElementById("nameb").innerHTML ="";
}
function show1(){
	alert("疼痛成因:單肩負重、持續性轉向單側姿勢疼痛症狀:下頸部與肩線轉角處疼痛,並伴隨頸部轉動不易治療方法:肩胛提肌拉筋運動、肩胛提肌定錨式、站式拉筋運動​若要拉左邊的肌肉，先把左手放在肌肉附著端扣好，右手繞過頭放頭上，此時頭下壓向右轉再低頭，持續30秒，重複多次可達到拉筋之效果​​肌力訓練:將雙手向上舉起並將掌心往內轉朝向外面，再將雙手往下放，使角度垂直。此時因為將兩邊肌肉鎖死故可以努力的將肩胛間往內縮達到訓練的效果，一般一次大約6秒")
}
function show2(){
	alert("疼痛成因:前位頭部錯姿、長時間抬頭或轉頭、枕頭過高等疼痛症狀:耳後、下巴、眼窩後側疼痛,也可能伴隨頭暈、頭痛、失衡等治療方法:胸鎖乳突肌拉筋運動、定錨式拉筋運動​胸鎖乳突肌拉筋運動:若要拉左邊，就把左手放在身後，頭先往後仰，再往右靠，最後看向左方，便可達到拉筋之效")
}
function show3(){
	alert("疼痛成因:駝背、圓肩錯姿,或持續至於內收姿疼痛症狀:前胸或乳部疼痛,可能伴隨肩胛疼痛、胸悶,沿手臂下傳至小指或無名指治療方法:胸大肌拉筋運動、胸大肌定錨式拉筋運動​胸大肌拉筋運動:利用簡單的門框便可開始。先將手水平放在門框上，假設要拉筋的肌肉在左邊，就把左腳向前呈弓箭步，身體微微向前傾。若是要拉鎖骨附近的胸大肌便將手向下移動。若要拉胸骨附近較低的肌肉則把手向上抬生。")
}
function show4(){
	alert("腰痛來源疼痛成因:久坐、蜷曲睡姿、仰臥起坐過度訓練疼痛症狀:腰椎兩側或大腿前側痠痛治療方法:髂腰肌站式、跪式拉筋運動、趴臥式髂腰肌拉筋運動​站式髂腰肌拉筋:若要拉左邊的髂腰肌則左腳往後延伸坐弓箭步的姿勢，左手上舉可以增加拉筋強度​跪式的髂腰肌拉筋，若要拉左側的髂腰肌可以左腳向後跪呈弓箭步姿勢，重心努力的往下壓，甚至可以舉起左手增強效果")
}
function show5(){
	alert("疼痛成因:維持前位頭部、打電腦、書包過重等疼痛症狀:肩部與胸部前側疼痛,也可能產生類似高爾夫球肘的疼痛或中指發麻治療方法:胸小肌拉筋運動、胸小肌定錨式拉筋運動​胸小肌拉筋運動:若要拉右邊的胸小肌，則可將右手放於牆上與肩膀同高的位置，腳與牆離大約50公分，右腳往前做弓箭步，身體微微向前傾，不可將身體轉向腳的角度，維持30秒。​")
}
function show6(){
	alert("疼痛成因:瞬間離心收縮、深蹲動作等疼痛症狀:膝蓋前側或上緣疼痛治療方法:股直肌站式、跪式拉筋運動​股直肌站式拉筋運動找一張較矮的椅子，如果想要拉的是左邊的肌肉，就將左腳向後放在椅子上，有腳向前彎曲像是弓箭步一樣，重心要盡量壓低，可以再用左手去拉起左腳讓拉筋更進一步。​股直肌貴式拉筋運動若想拉左邊的肌肉，就把左腳向後跪著，右腳則彎曲在前，跟站姿的方式一樣把重心向下後以左手拉起左腳，就能達到拉筋的效果了")
}
function show7(){
	alert("頸因性頭痛的元凶疼痛成因:持續性頭、頸部動作,尤其是電腦族、低頭族疼痛症狀:偏頭痛.頸部僵硬,疼痛也可能從後頸部上傳至頭側及眼窩後治療方法:枕下肌拉筋運動、枕下肌定錨式拉筋​​拉筋運動:請病患雙手放在耳後，下巴下壓並點頭持續五秒鐘後放鬆，持續15次便可改善")
}
function show8(){
	alert("疼痛成因:抬重物、肩負重、持續性抬臂姿勢、圓肩錯姿 疼痛症狀:頭頸部頭痛、頸部僵硬、緊張性疼痛等 治療方法:上斜方肌站、坐式拉筋運動、上斜方肌定錨式拉筋運動 ​ 站式上斜方肌拉筋運動 ​若要拉左邊的上斜方肌，則請病患右手繞過頭放在腦後，左手放在背後，右手將投下壓並扭轉達30秒，便可達到簡單的拉筋。 ​ 坐式上斜方肌拉筋運動 ​若要拉左邊的上斜方肌，則請患者將左手放在大腿下，右手繞過頭放在腦後，右手下壓並旋轉扭動達30秒。 毛巾法 將毛巾扭出一個結後放在腋下夾住，手拉著毛巾另一端。若要拉左邊的上斜方肌，便先將頭靠向左方使肌肉放鬆，再將頭靠向右方旋轉下壓30秒達到拉筋的效果")
}
function show9(){
	alert("背痛元凶 疼痛成因:久坐、久站、彎腰等過度使用髖關節動作 疼痛症狀:腰痛、臀部疼痛 治療方法:豎脊肌平臥式、坐式拉筋運動、定錨式拉筋運動 ​ 臥式豎脊肌拉筋: 患者躺著雙手抱膝蓋，先讓肌肉維持這樣30秒再用膝蓋頂著手6秒如此重複3次便可達到拉筋的效果 ​ 坐式豎脊肌拉: 若要拉右側的豎脊肌，則先將右腳盤起，左腳跨於右腳上方，右手抱著膝蓋，身體轉向左方並前傾 ​")
}
function show10(){
	alert("肌力訓練:若想訓練左邊的臀中肌，就先側臥在床上左腳在上，右腳彎曲支撐，左腳平舉向上，不可產生任何外旋或內旋，放下時速度要慢，重複個15~30下就能產生一定的訓練效果")
}
function show11(){
	alert("肌力訓練:若要訓練左邊的臀大肌，先趴臥在床上，左腳彎曲向上抬離開床，心理要默念著用臀大肌的力量，往上抬放下的時候動作要慢，效果較好。如果想要更進一步訓練可以在腿上加沙包，增加重量。")
}
function show12(){
	alert("假性坐骨神經痛元凶疼痛成因:長時間髖屈曲姿勢、偏單邊承重進行旋轉動作等疼痛症狀:帶有明顯痛點的臀部疼痛,疼痛可能傳至髂骶關節或沿著大腿後側下傳治療方法:梨狀肌坐式、站式拉筋運動、定錨式拉筋與按摩滾筒應用​梨狀肌坐式拉筋運動將腳呈現翹腳的姿勢，腹步努力的去貼齊大腿即可​梨狀肌站姿拉筋運動若想拉左邊肌肉則將左腳像翹腳一樣放在窗上，髖關節要呈現外展的姿勢，角度大約80度。擺好姿勢之後將腹部努力地往前找大腿，不可以變成彎腰的姿勢腰部要保持直的狀態，這樣才會有比較好的拉筋效果")
}
function show13(){
	alert("疼痛成因:身體前傾姿、彎腰姿久站、翹二郎腿坐姿過久等疼痛症狀:後膝側、大腿後側疼痛,可能出現臀部疼痛治療方法:膕旁肌拉筋運動、站式膕旁肌定錨式拉筋運動、按摩滾筒應用​膕旁肌拉筋運動若要拉左邊的膕旁肌，將左腳抬高放在床上，抬越高表示是針對越上方的膕旁肌進行拉筋運動，抬高後再以腹部找大腿方式身體下壓。如果想要拉較內側的膕旁肌時，假設是左腳的話身體就往右扭轉。​​")
}
function show14(){
	alert("與經常性小腿抽筋有關疼痛成因:長期穿高跟鞋導致肌肉短縮、鞋底摩擦力不足等疼痛症狀:足跟底部或後側疼痛乃至無法行走治療方法:比目魚肌拉筋運動、按摩球應用​比目魚肌拉筋運動:若想拉左腳的比目魚肌，就先將左腳向彎曲在床上，跪坐在右腳上，雙手向前，身體努力的向下壓，但腳掌不可離地，如此便可拉到比目魚肌。一般大約持續30秒左右")
}
function show15(){
	alert("與經常性小腿抽筋有關疼痛成因:維持身體前灣姿過久、短縮姿、長時間固定不動等疼痛症狀:小腿肚或後膝疼痛治療方法:腓腸肌拉筋運動、定錨式拉筋運動​腓腸肌拉筋運動:若想拉左腳的腓腸肌，就先將手向前放在牆上，左腳向後，腳底要貼著地面，再把重心向下移，就可達到拉筋的效果")
}